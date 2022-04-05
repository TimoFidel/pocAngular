pipeline {
    agent any 
    stages {
        stage('install sass'){
    		steps{
    			bat 'npm install sass'
    		}
    	} 
        stage('Start app'){
    		steps{
    			bat 'ng serve'
    		}
    	}   

    }
}