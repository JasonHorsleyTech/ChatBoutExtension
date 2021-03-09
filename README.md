# ChatBoutExtension
Chat bout stuf - extension

## wat

Hey so you know how the internet is the wonderful place full of all the information but also it's the worst because it's just god damn lonely?

And not just normal lonely because there's no one here, but extra special lonely because there are TONS of other people here all looking at the same stuff as you probably but you can't find them.

And social media's fix was "Hey heres a search bar where you can find people you already know". Well good god damn social media I don't want to find people I already know, the people I already know are boring and probably all hate me, I want to find people I don't know, that's the whole point.

so hey I'm gonna fix that by making a browser extension. Yeah baby, a BROWSER EXTENSION, the hottest tech trend since the rotate-y 12 frame gif.

## how

OK, extension listens to page change in background, and sends an sha-256 of that exact URL to the API. That hash is saved as a new "location".

We'll start with just the base URL until we get, I don't flipping know, 100 active users? Something. Then we'll update to root/first/three/slashes. And then after we're attending all the hot coke fuled zuckerberg parties I saw in that one movie, we'll actually just hash the whole damn URL, because damn how cool would it be to meet someone who's also way into whatever weird 180 character website you're currently visiting?

So ok. sha of URL, complexity based on user base. And when you're there, you can leave your mark. Think of it like peeing on a fire hidrant, except less constructive.

And then people can comment on your mark. And if you're still online and active, you see that it was commented on, and you can comment back. And I'm not doing any pusher integration until I absolutely have to.

wam bamb social network.

Oh except that you send in a "create traveler" call, and I attach a random hash to a secure cookie, and that's your identity. It expires in 3 hours and I'll refresh back up to 3 hours every time you leave a mark. So eventually, you'll lose that identity, and any public conversations are just so much noise cluttering up the internet.

LATER, private chat between travelers, mark -> private comment -> long poll to make that work.

LATER LATER, I buy or roll my own pusher channels and you can have an actual chat.

do people even use extensions anymore?
