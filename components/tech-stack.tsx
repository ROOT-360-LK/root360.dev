import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function TechStack() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            Technology Stack
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white">
            Cutting-Edge Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            We leverage the latest and most reliable technologies to build your
            solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frontend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Vue.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Backend</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">.NET</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">Go</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Database</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">Redis</Badge>
              <Badge variant="secondary">MySQL</Badge>
              <Badge variant="secondary">Elasticsearch</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">DevOps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Azure</Badge>
              <Badge variant="secondary">CI/CD</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
