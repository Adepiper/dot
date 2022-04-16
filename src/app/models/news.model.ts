export class NewsResponse {
  status: Status = 'ok';
  totalResults = 0;
  articles: News[] = [];
}

export class News {
  author = '';
  title = '';
  source = new NewsSource();
  description = '';
  url = '';
  urlToImage = '';
  publishedAt = '';
  content = '';
  subscribed = false;
}

export class NewsSource {
  id: string | null = null;
  name = '';
}

type Status = 'ok' | 'error';
