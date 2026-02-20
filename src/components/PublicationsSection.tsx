import { motion } from "framer-motion";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  tag?: string;
}

const publications: Publication[] = [
  {
    title: "End-of-life care reimagined: The promise of digital health technologies for aging populations – systematic review",
    authors: "T. D. Jayasuriya, G. S. Karunathilaka, and W. Gunathilaka",
    venue: "Working with Older People, vol. 30, Issue 1",
    year: 2026,
  },
  {
    title: "Generative AI in higher education: Perspectives of students, educators and administrators",
    authors: "S. Kutty, R. Chugh, P. Perera, A. Neupane, M. Jha, L. Li, W. Gunathilake, and N. C. Perera",
    venue: "Journal of Applied Learning & Teaching, vol. 7, no. 2, pp. 47–60",
    year: 2024,
  },
  {
    title: "Integrated approach for asset price forecasting via Prophet model and optimizing investment strategies through genetic algorithms",
    authors: "J. R. Senadheera, M. K. P. Madushanka, and H. R. W. P. Gunathilake",
    venue: "International Journal of Research in Computing",
    year: 2024,
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-semibold mb-12"
        >
          Selected <span className="italic text-accent">Publications</span>
        </motion.h2>

        <div className="space-y-0 divide-y divide-border">
          {publications.map((pub, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="py-6 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-medium text-foreground group-hover:text-accent transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-1 italic">
                    {pub.venue}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {pub.tag && (
                    <span className="text-xs px-2 py-1 bg-accent/15 text-accent font-medium rounded-sm">
                      {pub.tag}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground tabular-nums">
                    {pub.year}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Full list available on{" "}
          <a href="https://scholar.google.com/citations?hl=en&user=uLVpCZYAAAAJ&view_op=list_works" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Google Scholar
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default PublicationsSection;
