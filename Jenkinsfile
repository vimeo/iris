pipeline {
    environment {
      NPM_CONFIG_CACHE = "/tmp/.npm"
    }
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
        stage('build & test') {
            parallel {
                stage('lint') {
                    steps {
                        sh 'yarn lint'
                    }
                }
                stage('typecheck') {
                    steps {
                        sh 'yarn typecheck'
                    }
                }
                stage('test') {
                    steps {
                        sh 'yarn test -u'
                    }
                }
                stage('build') {
                    steps {
                        sh 'yarn build'
                    }
                }
                stage('storybook') {
                    steps {
                        sh 'yarn build-storybook'
                    }
                }
            }
        }
    }
}
