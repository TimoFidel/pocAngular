pipeline {
    agent any 
    stages {
    	stage('build app'){
    		steps{
    			bat 'ng build'
    		}
    	}
        stage('Start app'){
    		steps{
    			bat 'ng serve'
    		}
    	}

		stage('Build Docker image'){
            steps {
              
                bat 'docker build -t  vaztimofidel/docker_angular:latest .'
            }
        }
        

    }
}