### Manchester united reporters tier list

<hr/>

## Features

    # A tier-list made for manchester united news
        Tier 0 = (Undisputed, Official Sources)
        Tier 1 = (Highest Quality Sources)
        Tier 2 (Proven to have current sources)
        Tier 3 (Average reliability, or former Tier 2)
        Tier 4 (Indirect sources, low reliability)
    # Also has search box to search for any reporters, their work place, reporter type and region
    # Has associated clubs, region per reporter to ensure credibility
    # TODO / Add filters

## Reporters JSON Data is present in app/data/tierList.json

JSON structure

```
        {
            "name": "Simon Peach",
            "type": "journalist",
            "tier": 1,
            "workplace": "PA, The Independent",
            "link": "SimonPeach",
            "region": "England",
            "club": ["Manchester United"]
        },

```

# Some sources may not have a twitter link

you might need to update it in this format and replace link with the full url

```
        {
            "name": "Der Westen",
            "type": "publication",
            "tier": 2,
            "workplace": "derwesten.de",
            "link": "www.derwesten.de/",
            "region": "Germany",
            "not_twitter_link": true,
            "club": ["Schalke", "Gladbach", "BVB"]
        },

```

-   name = Soure Name
-   type = Journalist / Reporter / Anchor
-   tier = The source tier
-   workplace = The source workplace(s)
-   link = their twitter handle link, if they do not have twitter leave it "N/A"
-   region = Their region, if unsure you don't need to include this
-   club = The clubs where they report to, if unsure not necessary
-   not_twitter_link = boolea, only when the source might not have a twitter handle

<hr/>

## Contributing to manchester-united-tierlist

-   If you feel the info does not match or needs updating please feel free to update the JSON values and create a pull
    request or add new entries if necessary following the JSON strucure above.

*   If you are adding images please add it in the public folder, import it in the public/index.ts and then based on the image being a club or country use it in app/utils.
