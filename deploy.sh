git pull
rm -rf ./docs
mv ./build ./docs

git add -A
git commit -m "deploy: $(date)"
git push -f
