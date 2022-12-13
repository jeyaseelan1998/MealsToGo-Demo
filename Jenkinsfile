pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Pulled from github repo'
                sh 'mvn clean package'
            }
        }
        stage('SonarQube analysis') {
            //    def scannerHome = tool 'SonarScanner 4.0';    //SonarQubeScanner-4.9.0
            steps {
                withSonarQubeEnv('sonarqube-8.9') {
                    // If you have configured more than one global server connection, you can specify its name
                    //      sh "${scannerHome}/bin/sonar-scanner"
                    sh 'mvn sonar:sonar'
                }
            }
        }
    }
}
