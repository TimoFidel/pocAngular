pipeline {
    agent any 
    stages {
        stage('docker build'){
    		steps{
    			bat 'docker build . -t pocangular:latest'
    		}
    	} 
        stage('Start app'){
    		steps{
    			bat 'docker run -p 4200:80 pocangular:latest'
    		}
    	}   

    }
}