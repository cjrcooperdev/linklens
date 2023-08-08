let links = [
    {name: 'finehomesandliving.com', dr: 60, cost: 395},
{name: 'ftnnews.com', dr: 73, cost: 300},
{name: 'atn.com.au', dr: 40, cost: 350},
{name: 'emmaplusthree.com', dr: 34, cost: 250},
{name: 'oracleglobe.com', dr: 52, cost: 342},
{name: 'editorialge.com', dr: 70, cost: 350},
{name: 'pubclub.com', dr: 43, cost: 400},
{name: 'brilliantread.com', dr: 56, cost: 286},
{name: 'mybeautygym.com', dr: 26, cost: 400},
{name: 'alltechbuzz.net', dr: 63, cost: 238},
{name: 'geniuzmedia.com', dr: 35, cost: 399},
{name: 'voicesfromtheblogs.com', dr: 47, cost: 250},
{name: 'trendsbuzzer.com', dr: 30, cost: 400},
{name: 'widgetbox.com', dr: 80, cost: 238},
{name: 'fashionbombdaily.com', dr: 69, cost: 260},
{name: 'lovebylife.com', dr: 32, cost: 349},
{name: 'industrywired.com', dr: 60, cost: 370},
{name: 'imaginationhunt.com', dr: 23, cost: 352},
{name: 'hitechwiki.com', dr: 30, cost: 300},
{name: 'vforvibes.com', dr: 40, cost: 350},
{name: 'ursuperb.com', dr: 29, cost: 400},
{name: 'thelinkery.com', dr: 28, cost: 100},
{name: 'yeyelife.com', dr: 49, cost: 380},
{name: 'newscolony.com', dr: 34, cost: 263},
{name: 'furybyte.com', dr: 33, cost: 300},
{name: 'thetecheducation.com', dr: 37, cost: 300},
{name: 'eglobaltravelmedia.com.au', dr: 63, cost: 190},
{name: 'liveinlimbo.com', dr: 42, cost: 360},
{name: 'istorytime.com', dr: 32, cost: 110},
{name: 'appetiteforprofit.com', dr: 36, cost: 95},
{name: 'jt.org', dr: 69, cost: 190},
{name: 'gamegavel.com', dr: 52, cost: 140},
{name: 'mythreeandme.co.uk', dr: 27, cost: 270},
{name: 'urbanasian.com', dr: 47, cost: 75},
{name: 'whatsontech.com', dr: 35, cost: 250},
{name: 'wphealthcarenews.com', dr: 53, cost: 420},
{name: 'pittsburghbettertimes.com', dr: 38, cost: 420},
{name: 'techmash.co.uk', dr: 53, cost: 140},
{name: 'newsonjapan.com', dr: 53, cost: 140},
{name: 'startsmarter.co.uk', dr: 45, cost: 200},
{name: 'freeholidaywifi.com', dr: 44, cost: 480},
{name: 'bodhizazen.net', dr: 62, cost: 190},
{name: 'yourlifeforless.com', dr: 39, cost: 190},
{name: 'optimiam.com', dr: 47, cost: 300},
{name: 'hipradar.net', dr: 36, cost: 250},
{name: 'utilitarian.net', dr: 56, cost: 300},
{name: 'dandelife.com', dr: 38, cost: 480},
{name: 'conflict-news.com', dr: 35, cost: 420},
{name: 'spikysnail.com', dr: 46, cost: 190},
{name: 'thebroodle.com', dr: 40, cost: 260},
{name: 'thebloggerspage.com', dr: 29, cost: 190},
{name: 'allneedy.com', dr: 37, cost: 480},
{name: 'weblyen.com', dr: 38, cost: 480},
{name: 'voozon.com', dr: 62, cost: 300},
{name: 'asakyu.com', dr: 53, cost: 300},
{name: 'lessonpaths.com', dr: 53, cost: 300},
{name: 'destinationluxury.com', dr: 59, cost: 170},
{name: 'superbhub.com', dr: 29, cost: 160},
{name: 'craftfoxes.com', dr: 48, cost: 170},
{name: 'iheartintelligence.com', dr: 56, cost: 340},
{name: 'vowtobechic.com', dr: 49, cost: 170},
{name: 'gotravelblogger.com', dr: 31, cost: 170},
{name: 'Phaseradar.com', dr: 71, cost: 360},
{name: 'boricua.com', dr: 32, cost: 140},
{name: 'veteranstoday.com', dr: 70, cost: 170},
{name: 'Greendiary.com', dr: 54, cost: 95},
{name: 'dekhnews.com', dr: 54, cost: 420},
{name: 'gametransfers.com', dr: 56, cost: 190},
{name: 'Hometone.com', dr: 40, cost: 95},
{name: 'Scrapdigest.com', dr: 41, cost: 150},
{name: 'Kitchensurfing.com', dr: 58, cost: 150},
{name: 'Meritline.com', dr: 55, cost: 150},
{name: 'apppicker.com', dr: 65, cost: 360},
{name: 'parlemag.com', dr: 52, cost: 250},
{name: 'metalinsider.net', dr: 53, cost: 330},
{name: 'publicistpaper.com', dr: 59, cost: 180},
{name: 'ridzeal.com', dr: 53, cost: 275},
{name: 'gadgetstripe.com', dr: 71, cost: 460},
{name: 'fashionablymale.net', dr: 41, cost: 150},
{name: 'wayssay.com', dr: 50, cost: 270},
{name: 'killthecan.org', dr: 39, cost: 285},
{name: 'shawanoleader.com', dr: 32, cost: 210},
{name: 'realitypaper.com', dr: 57, cost: 270},
{name: 'onlytechno.net', dr: 28, cost: 180},
{name: 'themalestrom.com', dr: 28, cost: 285},
{name: 'tarametblog.com', dr: 27, cost: 270},
{name: 'citygoldmedia.com', dr: 69, cost: 100},
{name: 'metalsucks.net', dr: 70, cost: 830},
{name: 'uniquenewsonline.com', dr: 58, cost: 330},
{name: 'skymetweather.com', dr: 65, cost: 200},
{name: 'millennialships.com', dr: 32, cost: 470},
{name: 'socialtelecast.com', dr: 36, cost: 750},
{name: 'uptobrain.com', dr: 36, cost: 750},
{name: 'potentash.com', dr: 42, cost: 420},
{name: 'newsanyway.com', dr: 67, cost: 510},
{name: 'medsnews.com', dr: 60, cost: 195},
{name: 'anastesiadatefraud.com', dr: 29, cost: 630},
{name: 'tastefulspace.com', dr: 68, cost: 160},
{name: 'tntmagazine.com', dr: 57, cost: 625},
{name: 'real-fix.com', dr: 37, cost: 565},
{name: 'businessmodulehub.com', dr: 53, cost: 95},
{name: 'Filmdaily.co', dr: 73, cost: 180},
{name: 'Wonderworldspace.com', dr: 51, cost: 180},
{name: 'Parentsmaster.com', dr: 36, cost: 180},
{name: 'Vyoon.com', dr: 37, cost: 180},
{name: 'thexplorion.com', dr: 35, cost: 420},
{name: 'dottrusty.com', dr: 32, cost: 360},
{name: 'techstry.net', dr: 70, cost: 420},
{name: 'sortra.com', dr: 55, cost: 220},
{name: 'marketedly.com', dr: 39, cost: 180},
{name: 'getindianews.com', dr: 62, cost: 420},
{name: 'signalscv.com', dr: 76, cost: 660},
{name: 'studybreaks.com', dr: 72, cost: 390},
{name: 'travelexperta.com', dr: 46, cost: 130},
{name: 'easkme.com', dr: 49, cost: 600}
];

let budget = 1925;
let maxLinks = 15;  // Here you can set how many links you need

links.sort((a, b) => a.cost - b.cost);

let dp = Array.from({ length: links.length + 1 }, () => 
            Array.from({ length: budget + 1 }, () =>
              Array(maxLinks + 1).fill(0)));
let selected = Array.from({ length: links.length + 1 }, () => 
                Array.from({ length: budget + 1 }, () =>
                  Array(maxLinks + 1).fill([])));

for (let i = 1; i <= links.length; i++) {
    for (let j = 0; j <= budget; j++) {
      for (let k = 1; k <= maxLinks; k++) {
        if (links[i - 1].cost <= j) {
          let included = dp[i - 1][j - links[i - 1].cost][k - 1] + links[i - 1].dr;
          let notIncluded = dp[i - 1][j][k];
          if (included > notIncluded) {
            dp[i][j][k] = included;
            selected[i][j][k] = [...selected[i - 1][j - links[i - 1].cost][k - 1], links[i - 1]];
          } else {
            dp[i][j][k] = notIncluded;
            selected[i][j][k] = [...selected[i - 1][j][k]];
          }
        } else {
          dp[i][j][k] = dp[i - 1][j][k];
          selected[i][j][k] = [...selected[i - 1][j][k]];
        }
      }
    }
}

let res = selected[links.length][budget].find(x => x.length == maxLinks);
console.log(res)
let onlyList = res.map(x => x.name);
let totalCost = res.map(x => x.cost)
const sum = totalCost.reduce((partialSum, a) => partialSum + a, 0);

console.log(onlyList, sum);

