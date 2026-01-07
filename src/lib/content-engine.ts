import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage?: string;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
    const blogDir = path.join(CONTENT_PATH, "blog");
    if (!fs.existsSync(blogDir)) return [];

    const files = fs.readdirSync(blogDir);
    const posts = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            const filePath = path.join(blogDir, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);
            
            return {
                slug: file.replace(".md", ""),
                title: data.title,
                date: data.date,
                author: data.author,
                excerpt: data.excerpt,
                category: data.category,
                coverImage: data.coverImage,
                content,
            };
        });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        const filePath = path.join(CONTENT_PATH, "blog", `${slug}.md`);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title,
            date: data.date,
            author: data.author,
            excerpt: data.excerpt,
            category: data.category,
            coverImage: data.coverImage,
            content,
        };
    } catch (e) {
        return null;
    }
}

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  excerpt: string;
  outcomes: string[];
  techStack: string[];
  content: string;
  coverImage?: string;
};

export async function getCaseStudies(): Promise<CaseStudy[]> {
    const studiesDir = path.join(CONTENT_PATH, "case-studies");
    if (!fs.existsSync(studiesDir)) return [];

    const files = fs.readdirSync(studiesDir);
    const studies = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            const filePath = path.join(studiesDir, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);
            
            return {
                slug: file.replace(".md", ""),
                title: data.title,
                client: data.client,
                industry: data.industry,
                year: data.year,
                excerpt: data.excerpt,
                outcomes: data.outcomes || [],
                techStack: data.techStack || [],
                coverImage: data.coverImage,
                content,
            };
        });

    return studies.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
    try {
        const filePath = path.join(CONTENT_PATH, "case-studies", `${slug}.md`);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
            slug,
            title: data.title,
            client: data.client,
            industry: data.industry,
            year: data.year,
            excerpt: data.excerpt,
            outcomes: data.outcomes || [],
            techStack: data.techStack || [],
            coverImage: data.coverImage,
            content,
        };
    } catch (e) {
        return null;
    }
}
