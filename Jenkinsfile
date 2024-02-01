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
                sh "docker run -d --name my_node_app_jenkins -p 3000:3000 my-node-app:1.0"
            }
        }
    }
}
