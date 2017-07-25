FROM node:8.1

COPY package.json /usr/src/
WORKDIR /usr/src
RUN useradd -m user && chown -R user:user . && \
  ssh-keyscan -t rsa github.com > /etc/ssh/ssh_known_hosts

USER user
RUN npm install && \
  git config --global user.email "kontakt@textkrieg.de" && \
  git config --global user.name "Ada Blitz"

COPY . /usr/src

ENTRYPOINT [ "npm" ]
