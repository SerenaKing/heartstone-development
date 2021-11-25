# Heartstone Development

Heartstone Development is a discord server that runs on FiveM, Minecraft Development mainly.<br>
We also provide other services like creating and setting up the mentioned servers for the above games.
<br>

# Table Of Contents
    1. How to set the bot up.
    2. What am I limited to?
    3. What is `json.sqlite`?
    4. I have an issue!
    5. Where is the config?
    99. Contributions
# Table Of Contents
<br>

# 1. How to set the bot up.
To set this bot up you will need a list of things. The most important is having node.js installed on your machine.<br>
You should also probably know how to create a bot in the [DISCORD DEVELOPER PORTAL](https://discord.com/developers/applications).<br>

You will need to do the following after you have created your bot / installed node.js.<br>
    1.  Open the folder you put in the source of this project.<br>
    2.  Open a terminal in your desired editor or a cmd.<br>
    3.  Type `npm init -y` in your terminal (This will setup the `package-lock.json` file)<br>
    4.  Type `npm i` in your terminal once done (This will install all dependencies that are listed in `package.json`)<br>
    5.  Rename the `example.env` file to `.env` and enter your token.<br>
    6.  Try running your bot with `node .`<br>

You might have the question on to what the following piece of code does.
```
    // fs.writeFile('db.txt', JSON.stringify(quickdb.all()), function(e) {
    //     if(e) console.log(e)
    //     console.log('Success!')
    // })
```
If you remove the `//` from the code you will notice a new file being generated upon the start of the bot.<br>
This file puts all the entries from the `json.sqlite` into a readable text file.
<br>

# 2. What am I limited to?
You should probably read the [`LICENSE.md`](https://github.com/SerenaKing/heartstone-development/blob/Master-Branch/LICENSE.md) for that.
<br>

# 3. What is `json.sqlite`?
The `json.sqlite` file is the database that's being used. I personally don't have much experience with remote databases and such resorted to using quick.db. This is already pre-installed. (keep in mind that all you do is GLOBAL) You should probably delete this file but for me and my team it's best to keep using it.

If you don't remove the file there could be issues with the badges as all our staff has their "own" badge.
<br>

# 4. I have an issue!
Submit an issue on github here. https://github.com/SerenaKing/heartstone-development/issues
<br>

# 5. Where is the config?
The config is a `.env` file using the `dotenv` package for node.js.<br>
A example `.env` file was handed with the download. If not open an issue.
<br>

# 99. Contributions
[Nicole H.#9269](https://discord.com/users/871877975346405388)<br>