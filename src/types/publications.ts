// src/types/publications.ts
export type PublicationBase = {
    pubType: string;
    title: string;
    year: number | "Forthcoming";
    authors: string,
    openaccess: boolean,
    doi: string,
    url: string,
};

export type ArticlePublication = PublicationBase & {
    pubType: "article";
    journal: string;
    volume: number,
    issue: number,
    pages: string,
};

export type BookPublication = PublicationBase & {
    pubType: "book";
    publisher: string;
};

export type BookChapterPublication = PublicationBase & {
    pubType: "bookChapter";
    publisher: string;
    pages: string;
    bookAuthors?: string;
    bookTitle: string
}

export type PublicationData =
    | ArticlePublication
    | BookPublication
    | BookChapterPublication;