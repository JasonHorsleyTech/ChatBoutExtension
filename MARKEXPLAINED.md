## Hey there

So you're browsing the web, lets say you start at www.yahoo.com and you just want to say hello. So you leave a mark.

I'll hash the url you're currently on, using SHA256. Meaning "www.yahoo.com" gets turned into some garbage, like ```d61a0fed3d3852a6e450c964fc8925f7f4f83a2d1328b0bbe4cddebefc169c4b```. So you've actually left your mark, but it's keyed to the above random string. Meaning, I don't know you were at www.yahoo.com, I just see the crazy nonsense.

Lets say someone else visits www.yahoo.com and wants to know if there's anything to see. Well, they would hash the url as well, and get the same output (d61a...4b). They'd ask the server if there's anything at that string, and the server would say YES there is, the mark you just left.

So far so good.

Now lets say those pesky Russian hackers break into my living room and find the small crumpled notepad where I've written down my master passwords, and my bitcoin wallet address, and the social security number of all my friends. Oh no! They log into my backend and download the entire database.

Except, instead of seeing "John B. says 'hi' from www.yahoo.com", they just see "User (hash) says (hash) from (hash)."

Now I suppose they could start cracking, and maybe get some of the more common usernames and URL's cracked. Then they'd know a user calling himself "MilfMonger69" was, at some point, visiting yahoo.com.

But any URL more complicated than that would probably take some time.