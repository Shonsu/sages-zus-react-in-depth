# Instalacje 
node -v 
v20.17.0

npm -v 
10.8.2

git -v 
git version 2.40.1.windows.1
Google: git for windows

visual studio code 
1.93.1

# GIT
git clone https://bitbucket.org/ev45ive/sages-zus-react-in-depth.git

F1 -> Clone => PASTE ^ => Clone from URL -> Select location -> Open

git clone -c http.sslVerify=false  https://bitbucket.org/ev45ive/sages-zus-react-in-depth.git

git config http.sslVerify "false"

git config --global http.proxy http://fpx.zus.ad:8080/
git config --global http.sslVerify "false"

# Proxy NPM 
Utworz - C:/twoj uzytkownik/.npmrc 

proxy=http://fpx.zus.ad:8080/
http-proxy=http://fpx.zus.ad:8080/
https-proxy=http://fpx.zus.ad:8080/
registry=https://registry.npmjs.org/
strict-ssl=false

# FUnctional 
https://learnyouahaskell.github.io/chapters.html
// Monadic Chain

# UI Toolkits
https://js.devexpress.com/React/Documentation/Guide/UI_Components/Accordion/Demos/
https://getbootstrap.com/
https://react-bootstrap.netlify.app/docs/components/accordion

https://primereact.org/installation/
https://tailwindcss.com/
https://headlessui.com/v1/react/menu

https://mui.com/

# Tailwind

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# update
cd vite-project
npm i 
npm run dev


# Playlists

mkdir -p ./src/common/components

mkdir -p ./src/playlists/components
mkdir -p ./src/playlists/containers

touch ./src/playlists/components/PlaylistsView.tsx

touch ./src/playlists/containers/PlaylistDetails.tsx
touch ./src/playlists/containers/PlaylistList.tsx
touch ./src/playlists/containers/PlaylistEditor.tsx

# Music module

mkdir -p ./src/music/components
mkdir -p ./src/music/containers

touch src/music/containers/AlbumSearchView.tsx
touch src/music/containers/AlbumDetailView.tsx

touch src/music/components/SearchForm.tsx
touch src/music/components/ResultsGrid.tsx
touch src/music/components/AlbumCard.tsx

mkdir -p src/common/model
mkdir -p src/common/fixtures
touch src/common/model/Album.ts
touch src/common/fixtures/mockAlbums.ts

mkdir -p ./src/common/services
touch src/common/services/MusicAPI.ts


# CSS Dinner
https://flukeout.github.io/

Emmet Cheat Sheet
Tailwind Cheat Sheet
CSS Dinner

# REact Devtools
https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

# Spotify
xafejil469@kindomd.com

