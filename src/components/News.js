import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "Isabel Gonzalez",
      title:
        "2022 Stanley Cup Playoffs Game 7 live updates: Oilers face Kings to close out massive NHL first round Saturday - CBS Sports",
      description:
        "The Hurricanes and Lightning have already come out on top in their Game 7 matchups",
      url: "https://www.cbssports.com/nhl/news/2022-stanley-cup-playoffs-game-7-live-updates-oilers-face-kings-to-close-out-massive-nhl-first-round-saturday/live/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/05/15/e1af37d3-2c9c-4d56-a81f-5493d365a4e7/thumbnail/1200x675/3f560753167f862fd72708e7f26bc0ea/gettyimages-1240589910.jpg",
      publishedAt: "2022-05-15T02:24:00Z",
      content:
        "The two most beautiful words in sports? Game 7. Lucky for hockey fans, Saturday will be filled with plenty of excitement as the 2022 Stanley Cup Playoffs first round sees three Game 7s on the same da… [+1892 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Tampa Bay Lightning and Toronto Maple Leafs Exchange Handshakes Following Their Seven Game Series - SPORTSNET",
      description:
        "Watch Nick Paul speak on his two-goal effort as the Tampa Bay Lightning exchange handshakes with the Toronto Maple Leafs after their seven-game series which ...",
      url: "https://www.youtube.com/watch?v=EHhEMmahYMo",
      urlToImage: "https://i.ytimg.com/vi/EHhEMmahYMo/maxresdefault.jpg",
      publishedAt: "2022-05-15T02:05:42Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Ivana Kottasová and Rob Picheta, CNN",
      title:
        "Ukraine wins Eurovision Song Contest in wave of goodwill following invasion by Russia - CNN",
      description:
        "Ukraine's folk-rap group Kalush Orchestra captured the imagination of fans across the continent.",
      url: "https://www.cnn.com/2022/05/14/entertainment/ukraine-wins-eurovision-song-contest-2022-after-russian-invasion-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220512123841-02-eurovision-2022-preview-super-tease.jpg",
      publishedAt: "2022-05-15T00:41:00Z",
      content:
        "Kyiv, Ukraine (CNN)Ukraine's folk-rap group Kalush Orchestra has won this year's Eurovision Song Contest, surfing a wave of goodwill from European nations to clinch the country's third win at the gli… [+4082 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "North Korea reports 15 deaths and nearly 300,000 new ‘fever’ cases as Covid outbreak spreads - The Guardian",
      description:
        "Despite nationwide lockdown, there are now more than 800,000 suspected cases in the unvaccinated country",
      url: "https://amp.theguardian.com/world/2022/may/15/north-korea-reports-15-deaths-and-nearly-300000-new-fever-cases-as-covid-outbreak-spreads",
      urlToImage: null,
      publishedAt: "2022-05-15T00:40:00Z",
      content:
        "North KoreaDespite nationwide lockdown, there are now more than 800,000 suspected cases in the unvaccinated country \r\nSun 15 May 2022 01.28 BST\r\nNorth Korea said on Sunday a total of 42 people had di… [+2873 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Madeleine Ngo, Lola Fadulu",
      title:
        "Thousands Gather at Marches for Abortion Rights - The New York Times",
      description:
        "Nearly two weeks after the leak of a draft Supreme Court opinion overturning Roe v. Wade, protesters gathered in Washington, New York and other cities.",
      url: "https://www.nytimes.com/2022/05/14/us/abortion-rights-march.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/05/14/us/14womens-march-ny4/merlin_206860239_084372f0-6cde-493c-bd7c-dd706625f40b-facebookJumbo.jpg",
      publishedAt: "2022-05-15T00:16:55Z",
      content:
        "Without abortion, I would not be here, said Ms. Rains, who stood in the plaza with her 5-month-old daughter, Hendrix, and 3-year-old son, Jagger. At five months pregnant in November 2020, she said, s… [+1023 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Elon Musk says Twitter legal team told him he violated an NDA - Reuters",
      description:
        'Elon Musk on Saturday tweeted that Twitter Inc\'s <a href="https://www.reuters.com/companies/TWTR.N" target="_blank">(TWTR.N)</a> legal team accused him of violating a nondisclosure agreement by revealing that the sample size for the social media platform\'s ch…',
      url: "https://www.reuters.com/markets/deals/elon-musk-says-twitter-legal-team-told-him-he-violated-an-nda-2022-05-15/",
      urlToImage:
        "https://www.reuters.com/resizer/uJ5mTUU8wwRYogVmsH0lQkh7tyE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UUOP4DBZSFMHBGNPEHCUYYEOCM.jpg",
      publishedAt: "2022-05-15T00:07:00Z",
      content:
        "May 14 (Reuters) - Elon Musk on Saturday tweeted that Twitter Inc's (TWTR.N) legal team accused him of violating a nondisclosure agreement by revealing that the sample size for the social media platf… [+969 chars]",
    },
    {
      source: {
        id: null,
        name: "Heat.com",
      },
      author: "Shaun Powell",
      title:
        "The 10 Celtics and Bucks players most likely to meet the moment in Game 7 - NBA.com",
      description:
        "Sunday's Game 7 will determine the Bucks' ability to go back-to-back as champions or herald a return to the conference finals for Boston's young core.",
      url: "https://www.nba.com/news/the-10-celtics-and-bucks-players-most-likely-to-meet-the-moment-in-game-7",
      urlToImage:
        "https://cdn.nba.com/manage/2022/05/tatum-guarding-giannis-game-5.jpg",
      publishedAt: "2022-05-14T23:30:23Z",
      content:
        "Giannis Antetokounmpo and Jayson Tatum have been engaged in an epic battle on both sides of the ball throughout a well-contested series.\r\nBOSTON — Its Game 7, where reputations are created and reputa… [+7513 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "Britney Spears announces loss of ‘miracle baby’ early in pregnancy - The Guardian",
      description:
        "Pop superstar and her fiance, Sam Asghari, say in joint post ‘We will continue trying to expand our beautiful family’",
      url: "https://amp.theguardian.com/music/2022/may/14/britney-spears-pregnancy-baby-loss-instagram",
      urlToImage: null,
      publishedAt: "2022-05-14T23:24:00Z",
      content:
        "Britney SpearsPop superstar and her fiance, Sam Asghari, say in joint post We will continue trying to expand our beautiful family\r\nGuardian staff and agencies\r\nSat 14 May 2022 19.24 EDT\r\nBritney Spea… [+1962 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "R. Kelly's Standing as Hit-Maker Debated Amid New Kendrick Lyrics - TMZ",
      description:
        "The question over R. Kelly's musical legacy as hit-maker continues amid new Kendrick Lamar lyrics that directly invoke the disgraced singer ... and the internet has a lot of thoughts about whether he made good songs or not.",
      url: "https://www.tmz.com/2022/05/14/r-kelly-hit-maker-good-music-debate-kendrick-lamar-still-listen/",
      urlToImage:
        "https://imagez.tmz.com/image/0b/16by9/2022/05/14/0bc83f32eaff4bba8e285b781c6365a5_xl.jpg",
      publishedAt: "2022-05-14T23:00:00Z",
      content:
        "R. Kelly's legacy is being fiercely debated amid new Kendrick Lamar lyrics that touch on the now-disgraced/convicted R&amp;B legend -- question being ... did he make good music???\r\nThat's what Twitte… [+2692 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Liz Sly",
      title:
        "Russia is furious that Finland is joining NATO but can't do much about it - The Washington Post",
      description:
        "Russia withdrew troops from the border with Finland to send them to Ukraine, leaving Moscow with a significantly reduced capacity to threaten Finland militarily.",
      url: "https://www.washingtonpost.com/world/2022/05/14/finland-russia-nato-ukraine-retaliation/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AQ27LWWTUII6ZCDL353BQPJDH4.jpg&w=1440",
      publishedAt: "2022-05-14T22:48:09Z",
      content:
        "Placeholder while article actions load\r\nRIGA, Latvia Russias invasion of Ukraine spurred Finland to set aside long-standing concerns about provoking Russia and seek NATO membership, a major strategic… [+7294 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Sharif Paget, CNN",
      title:
        "Six people were injured when a small plane crashed into a Florida bridge, authorities say - CNN",
      description:
        "A small plane crashed Saturday into the Haulover Inlet Bridge in Florida's Miami-Dade County, injuring six people, authorities said.",
      url: "https://www.cnn.com/2022/05/14/us/small-aircraft-crash-miami-bridge/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220514150821-small-aircraft-crashes-on-miami-bridge-super-tease.jpg",
      publishedAt: "2022-05-14T22:27:00Z",
      content:
        "(CNN)A small plane crashed Saturday into the Haulover Inlet Bridge in Florida's Miami-Dade County, injuring six people, authorities said.\r\nTwo were taken to nearby trauma centers and three others wer… [+644 chars]",
    },
    {
      source: {
        id: null,
        name: "KBTX",
      },
      author: "Caleb Britt",
      title:
        "Officials believe convicted killer's escape in Leon County was premeditated - KBTX",
      description:
        "Officials believe 46-year-old Gonzalo Lopez is still in Leon County almost 48 hours after his escape.",
      url: "https://www.kbtx.com/2022/05/14/officials-believe-convicted-killers-escape-leon-county-was-premeditated/",
      urlToImage:
        "https://gray-kbtx-prod.cdn.arcpublishing.com/resizer/p09cv_tofAoBk2F3aPDxrB2qK6w=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/7I4DKIK7AZEQHDE7C32UDVNUSI.png",
      publishedAt: "2022-05-14T22:24:00Z",
      content:
        "CENTERVILLE, Texas (KBTX) - The search continues for convicted killer Gonzalo Lopez. Officials say the 46-year-old has been on the run for about 48 hours.\r\nLopez is serving a life sentence for capita… [+1891 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Carolyn Thompson, Michael Balsamo",
      title:
        "At least 10 dead in mass shooting at Buffalo supermarket - The Associated Press",
      description:
        "BUFFALO, N.Y. (AP) — A gunman opened fire with a rifle Saturday at a supermarket in Buffalo, New York, in what authorities called a “hate crime and racially motived violent extremism,” killing 10 people and wounding three others before being taken in custody,…",
      url: "https://apnews.com/article/buffalo-supermarket-shooting-442c6d97a073f39f99d006dbba40f64b",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/d6bb23506e63424d960e3e7b55039bec/3000.jpeg",
      publishedAt: "2022-05-14T21:28:20Z",
      content:
        "BUFFALO, N.Y. (AP) A gunman opened fire with a rifle Saturday at a supermarket in Buffalo, New York, in what authorities called a hate crime and racially motived violent extremism, killing 10 people … [+5450 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Desiree Murphy",
      title: "Lil Keed, rapper on Young Thug’s label, dead at 24 - Page Six",
      description:
        "The Atlanta-based rapper, who was a protégé of Young Thug, died Friday in Los Angeles at the age of 24.",
      url: "https://pagesix.com/2022/05/14/rapper-lil-keed-dead-at-24/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/05/lil-keed-getty-comp.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-05-14T21:17:00Z",
      content:
        "Lil Keed, a rapper signed to Young Thugs Young Stoner Life label, died on Friday in Los Angeles. He was 24. \r\nA rep confirmed the musicians death to the New York Times on Saturday, hours before Keed … [+3367 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "Shootings near Milwaukee Bucks playoff game injure 21 and prompt curfew - The Guardian",
      description:
        "A massive watch party scheduled for Sunday’s Game 7 between the Bucks and Celtics has been called off after 21 people were injured in three shootings",
      url: "https://amp.theguardian.com/sport/2022/may/14/milwaukee-bucks-shootings-fiserv-arena-playoffs",
      urlToImage: null,
      publishedAt: "2022-05-14T20:40:00Z",
      content:
        "Milwaukee Bucks<ul><li>Twenty-one injured in three shootings near Bucks arena</li><li>Outdoor watch party for Sundays Game 7 called off</li></ul>\r\nSat 14 May 2022 21.40 BST\r\nDowntown Milwaukee will b… [+5289 chars]",
    },
    {
      source: {
        id: null,
        name: "lehighvalleylive.com",
      },
      author: "Kurt Bresswein | For lehighvalleylive.com",
      title:
        "Masks urged indoors in Lehigh and Northampton counties with ‘high’ COVID level - lehighvalleylive.com",
      description:
        "The U.S. Centers for Disease Control and Prevention on Thursday updated community levels of the coronavirus illness.",
      url: "https://www.lehighvalleylive.com/coronavirus/2022/05/masks-urged-indoors-in-lehigh-and-northampton-counties-with-high-covid-level.html",
      urlToImage:
        "https://www.lehighvalleylive.com/resizer/VB0Yl-_QqY29fTVCJE4GQbTkK6Y=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/22KAWHJIC5GAZDTAMYO236EKWU.jpg",
      publishedAt: "2022-05-14T19:25:00Z",
      content:
        "Lehigh and Northampton counties are experiencing high community levels of COVID-19, the U.S. Centers for Disease Control and Prevention says, based on calculations released Thursday.\r\nThat means the … [+1051 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Clive McKeef",
      title:
        "Crypto investor Barry Silbert offers sympathy and advice to those who have lost fortunes this week - MarketWatch",
      description:
        "“Heartbreaking to hear rumors of suicides… It sucks” – Barry Silbert",
      url: "https://www.marketwatch.com/story/crypto-investor-barry-silbert-offers-sympathy-and-advice-to-those-who-have-lost-fortunes-this-week-11652552821",
      urlToImage: "https://images.mktw.net/im-542785/social",
      publishedAt: "2022-05-14T18:26:00Z",
      content:
        "Billionaire crypto investor, Barry Silbert, the founder and CEO of Digital Currency Group, on Saturday offered sympathy and advice to those who have lost fortunes recently. Its been a tough six month… [+2335 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "David L. Stern, William Branigin, Timothy Bella",
      title:
        "Mitch McConnell leads Senate GOP delegation in surprise visit Ukraine, meets President Zelensky - The Washington Post",
      description:
        "Zelensky expressed hope that the Senate would quickly approve a nearly $40 billion package of additional funding for Ukraine after Sen. Rand Paul (R-Ky.), who was not on the trip, blocked the vote until next week.",
      url: "https://www.washingtonpost.com/politics/2022/05/14/ukraine-mcconnell-gop-visit-zelensky/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VWWHKRWTRQI6ZCDL353BQPJDH4.jpg&w=1440",
      publishedAt: "2022-05-14T17:55:00Z",
      content:
        "Placeholder while article actions load\r\nUkrainian President Volodymyr Zelensky met Saturday with a U.S. Senate delegation led by Minority Leader Mitch McConnell (R-Ky.) in Kyiv, calling the visit a p… [+4894 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Amy Simonson, Taylor Ward, Sharif Paget and Ray Sanchez, CNN",
      title: "Texas heat wave: Temperatures knock 6 power plants offline - CNN",
      description:
        "With an early-season heat wave searing much of Texas over the weekend, the nonprofit that manages power to more than 26 million customers wants them to turn up their thermostats.",
      url: "https://www.cnn.com/2022/05/14/us/texas-heat-wave-ercot-conserve/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220514123455-texas-power-lines-2021-file-super-tease.jpg",
      publishedAt: "2022-05-14T17:10:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "GMA",
      },
      author: "Dr. Rebecca Fujimura, Dr. Genevieve Yang",
      title:
        "Baby formula shortage: What parents should and shouldn't do - GMA",
      description:
        "Baby formula shortage: What parents should and shouldn't do.",
      url: "https://www.goodmorningamerica.com/family/story/baby-formula-shortage-parents-84704581",
      urlToImage:
        "https://s.abcnews.com/images/GMA/baby-formula-shortage-03-ap-jef-220514_1652544468975_hpMain_16x9_992.jpg",
      publishedAt: "2022-05-14T16:55:47Z",
      content: null,
    },
  ];
  capitalizeFirstletter = (string) => {
    return string.chartAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("hello i am a construtor from news  ");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category} - NewsMonkey `;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.props.setProgress(0);
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(0);
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });

    this.props.setProgress(100);
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      source={element.source.name}
                      description={element.description}
                      author={element.author}
                      date={element.publishedAt}
                      imgURL={element.urlToImage}
                      newsURL={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
