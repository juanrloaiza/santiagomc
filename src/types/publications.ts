export type PublicationBase = {
    pubType: string;
    title: string;
    year: number | "Forthcoming";
    authors: string,
    openaccess?: boolean,
    doi?: string,
    url?: string,
    pages?: string,
};

export type ArticlePublication = PublicationBase & {
    pubType: "article";
    journal: string;
    volume: number,
    issue: number,
};

export type BookPublication = PublicationBase & {
    pubType: "book";
    publisher: string;
};

export type BookChapterPublication = PublicationBase & {
    pubType: "bookChapter";
    publisher: string;
    bookAuthors?: string;
    bookTitle: string
}

export type PublicationData =
    | ArticlePublication
    | BookPublication
    | BookChapterPublication;