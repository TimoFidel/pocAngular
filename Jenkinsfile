pipeline {
    agent any 
    stages {
        stage('install sass'){
    		steps{
    			bat 'npm install node-sass'
    		}
    	} 
        stage('Start app'){
    		steps{
    			bat 'ng serve'
    		}
    	}   

    }
}