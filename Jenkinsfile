pipeline {
    NPM_CONFIG_CACHE = '/tmp/.npm',
    agent {
        docker {
            label 'docker'
            image 'node'
        }
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
