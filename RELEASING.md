# Releasing Omnilingo

How code gets from your computer to your friends' phones and, eventually, the App Store.
iOS-first; Android can be added later with no code changes (see the bottom).

## The mental model

There are **two kinds of releases**, and you'll use the first one 95% of the time:

1. **OTA update (instant, no review).** Any JavaScript/content change — new chapters,
   lesson edits, copy fixes, most bug fixes — ships to already-installed apps in minutes
   via EAS Update. No App Store review. This is the default.
2. **Store build (occasional, reviewed).** Only when *native* things change (a new native
   dependency, app icon, permissions, an Expo SDK upgrade) or for the first submission.
   These go through Apple review.

Day to day: commit → push to `main` → testers get an OTA update automatically.
Now and then: tag a version → a full build is made and submitted to TestFlight/App Store.

## One-time setup (do these in order)

1. **Expo account** — sign up at https://expo.dev (free).
2. **EAS CLI + log in**
   ```
   npm install -g eas-cli
   eas login
   ```
3. **Link this project to your Expo account** (writes a projectId into app.json):
   ```
   eas init
   ```
4. **Turn on OTA updates** (installs expo-updates, sets the update URL + runtimeVersion):
   ```
   npx expo install expo-updates
   eas update:configure
   ```
5. **Apple Developer Program** — enroll at https://developer.apple.com (annual fee,
   ~$99; confirm current price). Required before any TestFlight/App Store build.
6. **GitHub token for automation** — create an access token at
   https://expo.dev/settings/access-tokens, then in your GitHub repo go to
   Settings → Secrets and variables → Actions → **New repository secret**,
   name it `EXPO_TOKEN`, paste the token. (This powers the workflows in `.github/workflows/`.)

## Get it on your friends' phones (first beta)

```
eas build --platform ios --profile preview     # builds a real .ipa (channel: preview)
eas submit --platform ios                       # uploads it to App Store Connect
```
Then in App Store Connect → TestFlight, add your friends' emails as testers. They install
the TestFlight app, accept the invite, and get Omnilingo — auto-updating from then on.

The first `eas build` will offer to create your app's signing credentials for you — say yes;
EAS manages them.

## Everyday flow after setup

- **Ship content/JS:** commit in GitHub Desktop → **Push** to `main`.
  The `EAS Update (OTA)` workflow runs automatically and pushes the change to the
  `preview` channel — your TestFlight testers get it within minutes, no rebuild.
- **Cut a store release:** create a version tag and push it:
  ```
  git tag v1.0.0
  git push origin v1.0.0
  ```
  The `EAS Build & Submit` workflow builds and submits to the App Store automatically.

## Going to the public App Store

When you're happy with the beta: cut a tag (above), then in App Store Connect fill in the
store listing (screenshots, description, price/subscription) and submit for review. After
approval it's live. Subsequent JS changes still ship instantly via OTA.

## Adding Android later

No code changes needed. When ready:
1. Add an `android` block to each profile in `eas.json` (can be empty `{}` to start).
2. Create a Google Play Console account (~$25 one-time).
3. `eas build --platform android --profile preview` for internal testing, then
   `eas submit --platform android`.
4. In `.github/workflows/eas-build.yml`, change `--platform ios` to `--platform all`.

## Where Replit fits now

GitHub is your source of truth. Use Replit only as a quick preview sandbox if you like —
have it pull from this GitHub repo rather than uploading zips. Most of the time you won't
need it: `eas build` + TestFlight is your real device-testing path.
