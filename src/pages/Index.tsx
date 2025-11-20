import sigamaLogo from "@/assets/sigama-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img src={sigamaLogo} alt="SIGAMA Logo" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-primary">SIGAMA</h1>
              <p className="text-sm text-muted-foreground">Sistema de Gestão Ambiental do Maranhão</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Bem-vindo ao SIGAMA</h2>
          <p className="text-lg text-muted-foreground">
            Sistema Integrado de Gestão Ambiental do Estado do Maranhão
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Licenciamento</CardTitle>
              <CardDescription>Gerencie licenças ambientais</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Acessar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fiscalização</CardTitle>
              <CardDescription>Controle de fiscalizações</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Acessar</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monitoramento</CardTitle>
              <CardDescription>Acompanhamento ambiental</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Acessar</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
