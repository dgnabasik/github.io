echo dgnabasik in portfolio...
eval "$(ssh-agent -s)"
git remote -v
ssh -T -ai /home/david/.ssh/portfolio_ed25519 git@github.com
git pull git@github.com:dgnabasik/portfolio.git
echo -n "push?"
read
git add --all :/
git commit -am "Release 1.0.2"
git push -u origin main
