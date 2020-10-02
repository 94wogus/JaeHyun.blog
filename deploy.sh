git pull
rm -rf ./docs
mv ./build ./docs

git add -A
git commit -m 'deploy commit'
git push -f
