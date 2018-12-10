pipeline {
    agent {
        label 'docker'
        docker { image 'node' }
    }
    stages {
        stage('yarn') {
            steps {
                sh 'yarn install'
            }
        }
        stage('lint') {
            steps {
                sh 'yarn lint'
            }
        }
        stage('build') {
            steps {
                sh 'yarn build'
            }
        }
    }
}
