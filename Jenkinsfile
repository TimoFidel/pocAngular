pipeline {
    agent any 
    stages {
        stage('docker build'){
    		steps{
    			sh 'docker build . -t pocangular:latest'
    		}
    	} 
        stage('Start app'){
    		steps{
    			sh 'docker run -p 4200:80 pocangular:latest'
    		}
    	}   

    }
}