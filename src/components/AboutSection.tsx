import { motion } from "framer-motion";
import { Users, Bot, BookOpen, GraduationCap, RefreshCw, HeartPulse, BarChart3, Cloud } from "lucide-react";


const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>

          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-8">
            About <span className="italic text-accent">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <p>Dr. Wijendra Gunathilake is an inspirational Academic Leader, Researcher, and Senior Lecturer in Computer Science with over 25 years of progressive experience in higher education. She has led academic programme expansion, curriculum innovation, and quality assurance initiatives across multiple universities, while fostering strong collaborations with professional bodies such as British Computer Society. She also served as the founding advisor to the first BCS Student Chapter in Sri Lanka, demonstrating her commitment to student success and professional engagement. Her research spans Empirical Software Engineering, Human Aspects of Software Engineering, Artificial Intelligence, Digital Transformation, e-Governance, and Knowledge Management, with a strong focus on diversity and inclusion in IT education.  





            </p>
            <p>
              She has supervised numerous undergraduate and postgraduate research projects and actively contributes to the global scholarly community as a member of IEEE, ASIS&T, Computer Society of Sri Lanka, and Organization for Women in Science for the Developing World. She is the founding Editor-in-Chief of the Journal of Research in Computing (IJRC), Editorial Board Member in STEM Education Journal and serves as a reviewer for leading international journals and conferences.





            

            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16">

          <h3 className="text-xl font-heading font-semibold mb-8">
            Research Interests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Human-Centred Software Engineering", Icon: Users, bg: "bg-blue-50 dark:bg-blue-950/30", iconColor: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800" },
              { label: "AI for Social Impact and Sustainable Development", Icon: Bot, bg: "bg-purple-50 dark:bg-purple-950/30", iconColor: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-800" },
              { label: "Knowledge Management", Icon: BookOpen, bg: "bg-amber-50 dark:bg-amber-950/30", iconColor: "text-amber-600 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800" },
              { label: "E-learning", Icon: GraduationCap, bg: "bg-green-50 dark:bg-green-950/30", iconColor: "text-green-600 dark:text-green-400", border: "border-green-200 dark:border-green-800" },
              { label: "Digital Transformation", Icon: RefreshCw, bg: "bg-cyan-50 dark:bg-cyan-950/30", iconColor: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-200 dark:border-cyan-800" },
              { label: "Health Informatics", Icon: HeartPulse, bg: "bg-rose-50 dark:bg-rose-950/30", iconColor: "text-rose-600 dark:text-rose-400", border: "border-rose-200 dark:border-rose-800" },
              { label: "IT Strategy", Icon: BarChart3, bg: "bg-indigo-50 dark:bg-indigo-950/30", iconColor: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-200 dark:border-indigo-800" },
              { label: "Cloud Computing", Icon: Cloud, bg: "bg-sky-50 dark:bg-sky-950/30", iconColor: "text-sky-600 dark:text-sky-400", border: "border-sky-200 dark:border-sky-800" },
            ].map(({ label, Icon, bg, iconColor, border }) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center gap-3 p-5 ${bg} border ${border} rounded-lg shadow-sm hover:shadow-md transition-all duration-200`}
              >
                <div className={`p-2 rounded-full bg-white/70 dark:bg-black/20 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-foreground/85 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16">
          <h3 className="text-xl font-heading font-semibold mb-6">
            Qualifications
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Ph.D in Computer Science, Keele University, UK",
              "M.Sc in (IT), University of Colombo School of Computing (UCSC), Sri Lanka",
              "M.Sc in Operations Research, University of Moratuwa, Sri Lanka",
              "Post Graduate Certificate in Higher and Professional Education, Staffordshire University, UK",
              "B.Sc., University of Colombo, Sri Lanka",
              "Certificate in Research Degree Supervision, Staffordshire University, UK",
              "Certificate of Teaching in Higher Education, General Sir John Kotelawala Defence University, Sri Lanka",
            ].map((qual) => (
              <li key={qual} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm">{qual}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;