sudo apt-get update -y
echo
sudo apt-get install firefox nodejs npm -y
echo
wget -c https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-linux64.tar.gz -O - | tar -xz
