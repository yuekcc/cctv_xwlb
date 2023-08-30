import { fetchNews } from './fetch_news.js';

let startDate = 30;
let startMonth = 7;
let startYear = 2023;
let thatDate = new Date(startYear, startMonth, startDate);
let today = new Date();

async function fetchHistory() {
  try {
    while (thatDate.getTime() < today.getTime()) {
      await fetchNews(thatDate);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      startDate++;
      thatDate = new Date(startYear, startMonth, startDate);
    }
  } catch (err) {
    console.warn('下载失败，', err.message);
    process.exit(1);
  }
}

fetchHistory();
