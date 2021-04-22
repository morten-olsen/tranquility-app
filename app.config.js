module.exports = {
  "expo": {
    "name": "Tranquility",
    "entryPoint": "src/index.ts",
    "slug": "tranquility",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/images/favicon.png"
    },
    "description": "",
    "hooks": {
      "postPublish": [
        {
          "file": "sentry-expo/upload-sourcemaps",
          "config": {
            "organization": process.env.SENTRY_ORG,
            "project": process.env.SENTRY_PROJECT,
            "authToken": process.env.SENTRY_AUTH_TOKEN
          }
        }
      ]
    }
  }
}
