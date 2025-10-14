import yahooFinance from 'yahoo-finance2';

export const getData  = async (searchitem) => {
    const searchOptions = {
        enableFuzzyQuery: true,
        quotesCount: 10,
        newsCount: 5
    }
    try {
        const result = await yahooFinance.search(searchitem,searchOptions);
        console.log(result)
        const quotes = result.quotes.map((item) => ({
            symbol: item.symbol??"N/A",
            shortname: item.shortname??"N/A",
            longname: item.longname??"N/A",
            exchange: item.exchange??"N/A",
            typeDisp: item.type??"N/A",
            industry: item.industry??"N/A",
            sector: item.sector??"N/A",
            country: item.country??"N/A",
            currency: item.currency??"N/A",
        }));
        const news = result.news.map((news) => ({
            title: news.title,
            link: news.link,
            publisher: news.publisher,
            providerPublishTime: news.providerPublishTime,
            type: news.type,
        }));
        return {quotes, news};
    } catch (error) {
        console.log('Error fetching symbol data:', error);
        return null;
    }
};