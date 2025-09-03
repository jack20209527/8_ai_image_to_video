
// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  const lang = document.documentElement.lang;
  
    faq_list = [{"title": "What is Horse Race Tests?", "content": "Horse Race Tests is a creative and competitive game that allows players to design their own horse race tracks and bet on the outcomes with friends. The game revolves around creating unique maps with obstacles and walls, customizing horses with various colors and traits, and engaging in jovial competition. Players can share their tracks and horse designs on social media platforms to showcase their creativity and skill. Additionally, our Horse Race Tests provide an environment where users can post horse race tests meme. The goal is to create a fun and engaging experience that blends strategic planning with the excitement of horse racing that is sure to spark jovial merriment. Whether you're a seasoned gamer or a casual player, Horse Race Tests offers something for everyone. Explore the features, master the strategies, and join a vibrant community of horse racing enthusiasts today. Plus, with constant updates and new content, there's always something fresh and exciting to discover."}, {"title": "How to Play the Horse Game?", "content": "Playing Horse Race Tests is easy and fun! First, start by creating your own unique horse race map using the intuitive map editor! Add obstacles, walls, and other challenges to make your race track interesting. Next, customize your horses with a variety of colors, patterns, and names. Then, gather your friends and place your bets on which horse you think will win. Once all bets are placed, start the race and watch as your horses compete to reach the carrot first. The player whose horse reaches the carrot wins the round and any bets placed on that horse. 'Horse Race Tests' also features a social media integration with 'horse race twitter'. You can also have a look through the horse race tests wiki for further information. Have fun playing and may the best player win! Share your crazy race tracks with the world! There is no limit to the jovial merriment."}, {"title": "Finding the Cyan Horse Races", "content": "The Cyan Horse Races are a special type of event within Horse Race Tests where all horses are colored in varying shades of cyan! These races are often themed around holidays or special occasions, adding an extra layer of jovial merriment to the gameplay. These races are designed to have different terrain. The unique design of this horse truly shows the endless possibilities that this game truly has! Each terrain is also designed to have different terrain to make the game that much more challenging. To participate in the Cyan Horse Races, keep an eye on the game's announcements and event schedule! You can also join the 'Horse Race Twitter' communities/ social media pages, where event details are often shared. The Cyan Horse Races offer increased rewards and bragging rights, making them a must-try for all players. They can also be a funny 'horse race tests meme' to be made when shared with friends, family or your social media followers!"}, {"title": "Understanding Horse Race Tests Meme", "content": "The Horse Race Tests meme culture has grown organically within the game's community, driven by the game's unique blend of creativity, competition, and jovial fun. Many players share humorous clips of unexpected horse behavior, ridiculous track designs, and epic betting fails. These memes often go viral within the community, creating a lively and engaging atmosphere. If you wish to look more into the lore of horse race, there is even a horse race tests wiki! To participate in the Horse Race Tests meme culture, start by creating your own funny content based on your in-game experiences. Share your clips, screenshots, and stories with the community, and be sure to engage with other players' content. You can even create your own original memes using image editing software and share them across your social media platforms. The more you contribute to the meme culture, the more you'll become an active member of the community and enjoy the Horse Race Tests experience to the fullest. Don't forget to explore the 'Horse Race Twitter' to stay up-to-date on the latest trends and memes."}, {"title": "Tips for Winning Horse Racing", "content": "Winning in Horse Race Tests requires a combination of strategic planning, quick thinking, and a bit of luck. Start by mastering the map editor and creating race tracks that favor your chosen horse's strengths. Pay careful attention to the placement of obstacles, walls, and other challenges, and design your tracks to be both challenging and fair. Next, experiment with different horse customization options to find the perfect combination of colors, patterns, and names. Observe your friends' betting strategies and develop counter-strategies to outsmart them, a unique way to get your fix of jovial merriment. Finally, stay up-to-date on the horse race today information and trends within the game community, and adapt your strategies accordingly. With practice and dedication, you'll become a master and dominate the horse 'racing' scene. And you never know, one day maybe there will be a professional organization known as 'hrt' or 'hrt horse'!"}, {"title": "Horse Race Tests Yuri or Not At All?", "content": "It's important to clarify that Horse Race Tests is not associated with 'horse race tests yuri'! Horse Race Tests is designed for general players to enjoy creative map, horse creation, and bet against each other to create a lively environment. The main goal here is all about bringing jovial merriment into the real of casual horse racing. If you do not believe me, go and check horse race twitter. I am sure you will not find any related connections with Yuri. Also, there is no documentation on horse race tests wiki that is any way related. Don't be fooled and come give it a try! Try the horse game with friends and let the best person win!"}];
    const commentData = [
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/SpeedRun_King.jpg",
            nickname: "TechGuruJake",
            playerType: "casual gamer",
            time: "2024.06.06",
            comment: "Just tried this HTML5 mini-game on my phone during lunch—super addictive! The controls are smooth, but I wish there were more levels. Still, it’s a blast for quick breaks. Def recommend it to anyone who loves simple, fun games. 😄 #HTML5Games #MiniGameFun"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Game_MasterZack.jpg",
            nickname: "PixelNinjaSara",
            playerType: "hardcore gamer",
            time: "2024.06.06",
            comment: "As a hardcore gamer, I was skeptical about HTML5 mini-games, but this one blew me away. The graphics are surprisingly crisp, and the challenge ramps up nicely. Took me hours to beat the boss level—worth it! Only thing is, I’d love some multiplayer options. Great job, devs! 🔥 #GamingAddict #HTML5"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Pixel_WizardDan.jpg",
            nickname: "RetroFanMike",
            playerType: "retro enthusiast",
            time: "2024.06.06",
            comment: "This HTML5 mini-game reminds me of old-school arcade games—simple, fast, and fun! Played it on my laptop, and it runs smoothly without lag. The pixel art is nostalgic, but I wish the sound effects were louder. Still, it’s a solid pick for quick gaming sessions. Loving it! 😊 #RetroGames #MiniGame"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/StrategyBoss_Alex.jpg",
            nickname: "KawaiiGamerLia",
            playerType: "casual gamer",
            time: "2024.06.06",
            comment: "OMG, this HTML5 mini-game is so cute and easy to pick up! Played it on my tablet while waiting for a friend, and it’s perfect for killing time. The characters are adorable, but I got stuck on level 5—maybe a hint system would help? Still, I’m hooked! 🥰 #CuteGames #HTML5Fun"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/RPG_FanaticWill.jpg",
            nickname: "StrategyKingTom",
            playerType: "strategy gamer",
            time: "2024.06.06",
            comment: "I’m into strategy games, but this HTML5 mini-game surprised me with its clever puzzles. It’s not super deep, but the quick rounds are perfect for my busy schedule. Ran it on my phone with no issues, though I’d love more difficulty options. Solid 8/10 for a mini-game! 👍 #StrategyGames #HTML5"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/IndieGame_FanJoe.jpg",
            nickname: "SpeedRunQueen",
            playerType: "speedrunner",
            time: "2024.06.06",
            comment: "As a speedrunner, I love how fast-paced this HTML5 mini-game is! Managed to beat my personal best in under 2 minutes, but the controls could be tighter for precision. Still, it’s a great challenge for quick sessions on my desktop. Hoping for leaderboards soon! 🚀 #SpeedRunning #MiniGame"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/Arcade_LoverEmma.jpg",
            nickname: "MMOAddictBen",
            playerType: "MMO player",
            time: "2024.06.06",
            comment: "Didn’t expect an HTML5 mini-game to be this engaging, but I played it on my break and couldn’t stop! The art style is clean, and the gameplay loops are fun. Not as complex as my usual MMOs, but it’s a nice change. Could use more content, though. Great for casual play! 😄 #MMOGamer #HTML5"
        },
        {
            avatar: "https://pub-2aef4031d227483ea5406094fa860a7e.r2.dev/header/KawaiiPlayer_Mia.jpg",
            nickname: "BattleFanAlex",
            playerType: "competitive gamer",
            time: "2024.06.06",
            comment: "This HTML5 mini-game’s battle system is surprisingly fun for a small title. Played it on my phone while waiting for a match, and the PVP mode is intense! Controls are decent, but I’d love more rewards for wins. Still, it’s a chill way to prep for bigger games. Solid vibes! 🏆 #CompetitiveGaming #HTML5"
        }
    ];

  // const translations = {

  // "en": 
  
    // [
    //       {
    //         "title": "Access Arise Crossover: Beta & Codes Guide",
    //         "content": "Want early access to 'arise crossover beta' features? Learn how to find 'arise codes' and 'roblox arise crossover codes'! Watch official announcements for test invites. Once eligible, get the direct download link. Remember, slots fill fast!"
    //       },
    //       {
    //         "title": "Safe 'Codes for Arise Crossover' & Downloads",
    //         "content": "Is 'arise crossover code' download safe? Our 'arise codes' and download links are from verified sources. Always check official channels like the 'arise crossover wiki' to avoid risks. We ensure secure 'code crossover arise' downloads, so you play worry-free."
    //       },
    //       {
    //         "title": "Unlock Features: 'Arise Crossover Dungeon' & More",
    //         "content": "Explore new 'arise crossover dungeon' content! The 'arise crossover beta' shows upcoming characters, maps, and gameplay. Versions like 'arise crossover mount' previews unique features. Try 'script arise crossover' for different experiences. Get exclusive rewards for your feedback!"
    //       },
    //       {
    //         "title": "Fixing 'Roblox Arise' Install Errors",
    //         "content": "Struggling to install 'roblox arise'? Check your device's permissions first. If that fails, redownload the game file. Consult community guides for 'roblox arise codes' help. If issues persist, contact our player support for assistance."
    //       },
    //       {
    //         "title": "Your Feedback: Shaping 'Anime Crossover' Game",
    //         "content": "Share your thoughts on 'anime crossover'! We value your input during tests. Use in-game tools or forums to report bugs or ideas. Your feedback directly impacts 'anime crossover codes' and future game updates. Your insights guide improvements."
    //       },
    //       {
    //         "title": "Game Data: 'Solo Leveling' & Arise Crossover",
    //         "content": "What about your progress in 'solo leveling' inspired modes? Beta data rarely transfers to the main game. However, your feedback from 'anime crossover codes' and 'solo leveling' modes helps us. Enjoy the beta, then experience the full game at launch!"
    //       }
    //   ]
      
  // }
    
      // accordionData = translations[lang]
      const accordionContainer = document.getElementById('accordion-container');
    
      faq_list.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.innerHTML = `
            <div class="arrow_down_button_parent_home">
                <button class="arrow_down_button_home">
                    ${item.title}
                    <span class="arrow_down_arrow_home"></span>
                </button>
                <div class="arrow_down_panel_home">
                    <p class="arrow_down_panel_text_home">${item.content}</p>
                </div>
            </div>
        `;
        accordionContainer.appendChild(accordionItem);
      });
    

    var acc = document.getElementsByClassName("arrow_down_button_home");
        var i;
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            var arrow = this.querySelector(".arrow_down_arrow_home"); // 获取箭头元素
            arrow.classList.toggle("active"); // 切换箭头元素的 active 类
        
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }

}); 