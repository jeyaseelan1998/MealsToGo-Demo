pipeline {
    agent any
    environment {
        PATH = "$PATH:C:/tools/apache-maven-3.8.6/bin"
    }
    stages {
        stage('Build') {
            steps {
                echo 'Pulled from github repo'
                bat 'mvn clean package'
            }
        }
        stage('SonarQube analysis') {
            //    def scannerHome = tool 'SonarScanner 4.0';    //SonarQubeScanner-4.9.0
            steps {
                withSonarQubeEnv('sonarqube-8.9') {
                    // If you have configured more than one global server connection, you can specify its name
                    //      bat "${scannerHome}/bin/sonar-scanner"
                    bat 'mvn sonar:sonar'
                }
            }
        }
    }
}
