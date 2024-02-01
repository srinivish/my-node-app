pipeline {
    agent any 

    stages {
        stage('Code') { 
            steps {
                git branch: 'main', url: 'https://github.com/srinivish/my-node-app.git'
            }
        }

        stage('Build') { 
            steps {
                sh 'docker build . -t my-node-app:1.0'
            }
        }

        stage('Test') { 
            steps {
                echo "Testing" 
            }
        }

        stage('Deploy') { 
            steps {
                script {
                    def containerName = "my_node_app_jenkins"
                    def isRunning = sh(script: "docker inspect -f '{{.State.Running}}' $containerName", returnStatus: true) == 0
                    if (isRunning){
                        // Container is running, stop and remove it
                        sh "docker stop $containerName"
                        sh "docker rm -f $containerName"
                    }
                // Deploy container with new build
                sh "docker run -d --name $containerName -p 3000:3000 my-node-app:1.0"
                echo "created new container: $containerName"
                }
            }
        }
    }
}
