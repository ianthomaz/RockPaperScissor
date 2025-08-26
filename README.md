# 🎮 RPS - Rock Paper Scissors Battle Simulation

## 📋 **Visão Geral**

O **RPS (Rock Paper Scissors Battle Simulation)** é uma simulação interativa desenvolvida na VM webplace.cc onde os elementos 🪨📄✂️ se movem e batalham entre si em tempo real! Assista à batalha épica ou participe interativamente controlando os elementos.

## 🌐 **Acesso e URLs**

### **URLs de Acesso:**
- **Principal**: `https://webplace.cc/rps/`
- **Local**: `http://127.0.0.1/rps/`
- **IP Direto**: `http://168.138.253.160/rps/`

### **Configuração Nginx:**
```nginx
# RPS Battle Simulation - Simulação de Batalha
location /rps/ {
    proxy_pass http://127.0.0.1:8084/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## 📁 **Estrutura do Projeto**

```
/home/opc/projetos/rps/
├── index.html          # Simulação completa (HTML + CSS + JS)
├── server.js           # Servidor Node.js
├── package.json        # Configuração do projeto
├── Dockerfile          # Configuração Docker
└── README.md           # Documentação
```

## 🚀 **Status Atual**

### **✅ Implementado:**
- [x] Simulação de batalha em tempo real
- [x] Canvas HTML5 responsivo
- [x] Modo interativo com campos gravitacionais
- [x] Modo gangue com aliados
- [x] Velocidade dinâmica baseada na quantidade
- [x] Interface de controles avançados
- [x] Configuração nginx para rota `/rps/`
- [x] Container Docker configurado

### **🔄 Próximos Passos:**
- [ ] Implementar sub-git do projeto
- [ ] Adicionar sons de batalha
- [ ] Implementar modo multiplayer online
- [ ] Adicionar mais elementos (Lizard, Spock)

## 🎮 **Como Jogar**

### **Modo Observador:**
1. **Iniciar Jogo**: Clique em "Iniciar Jogo" para começar a simulação
2. **Assistir**: Veja os elementos se movendo e batalhando automaticamente
3. **Contadores**: Acompanhe a quantidade de cada elemento em tempo real
4. **Vencedor**: O último elemento restante vence a batalha

### **Modo Interativo:**
1. **Ativar Modo Interativo**: Ligue o toggle "Modo Interativo"
2. **Escolher Elemento**: Selecione 🪨, 📄 ou ✂️ para controlar
3. **Criar Campos**: Clique/toque na tela para criar campos gravitacionais
4. **Controlar Movimento**: Seus elementos serão atraídos para onde você clicar

### **Modo Gangue:**
1. **Ativar Modo Gangue**: Ligue o toggle "Modo Gangue"
2. **Ajustar Raio**: Use o slider para definir o raio de influência
3. **Batalha em Grupo**: Elementos próximos se ajudam na batalha

### **Velocidade Dinâmica:**
- **Ativar**: Ligue o toggle "Velocidade Dinâmica"
- **Efeito**: Elementos mais numerosos se movem mais rápido
- **Estratégia**: Use para criar vantagens táticas

## 🔧 **Configuração Técnica**

### **Nginx Principal:**
- **Arquivo**: `/etc/nginx/sites-available/webplace.conf`
- **Status**: ✅ Configurado e ativo
- **Porta**: 8084 (RPS Battle Simulation)

### **Estrutura da VM:**
- **Localização**: `/home/opc/projetos/rps/`
- **Integração**: Nginx principal via proxy reverso
- **Domínio**: webplace.cc

## 📊 **Integração com Outros Projetos**

### **Projetos na VM:**
1. **Webplace** (porta 8010) - Site principal
2. **Bike Anjo Sistema** (porta 8082) - `/sistemaBA/`
3. **GCG** (porta 8004) - Glass Collection Game
4. **RPS Battle** (porta 8084) - `/rps/` - **🎮 NOVA SIMULAÇÃO**

### **URLs da VM:**
- **Principal**: `https://webplace.cc/`
- **Bike Anjo**: `https://webplace.cc/sistemaBA/`
- **RPS Battle**: `https://webplace.cc/rps/` ✅

## 🛠️ **Desenvolvimento**

### **Comandos Úteis:**
```bash
# Acessar o projeto
cd /home/opc/projetos/rps/

# Instalar dependências
npm install

# Executar localmente
npm start

# Testar nginx
sudo nginx -t

# Recarregar nginx
sudo systemctl reload nginx

# Ver logs do nginx
sudo tail -f /var/log/nginx/access.log
```

### **Docker Compose:**
```bash
# Construir e executar containers
cd /home/opc/decomposers
docker-compose -f rps.dcompose.yml up -d --build

# Ver logs
docker-compose -f rps.dcompose.yml logs -f

# Parar containers
docker-compose -f rps.dcompose.yml down
```

## 📈 **Funcionalidades Implementadas**

### **Simulação:**
- ✅ 90 elementos (30 de cada tipo) se movendo simultaneamente
- ✅ Física realista com colisões e rebatidas
- ✅ Regras tradicionais de RPS implementadas
- ✅ Sistema de vitória automática

### **Modos de Jogo:**
- ✅ **Modo Observador**: Simulação automática
- ✅ **Modo Interativo**: Controle com campos gravitacionais
- ✅ **Modo Gangue**: Aliados próximos se ajudam
- ✅ **Velocidade Dinâmica**: Baseada na quantidade

### **Interface:**
- ✅ Canvas HTML5 responsivo
- ✅ Controles com toggles e sliders
- ✅ Contadores em tempo real
- ✅ Animações suaves
- ✅ Suporte a touch (mobile)

## 🔍 **Testes e Validação**

### **Testes Realizados:**
- ✅ Configuração nginx válida
- ✅ Simulação carrega corretamente
- ✅ Todos os modos funcionando
- ✅ Campos gravitacionais ativos
- ✅ Modo gangue operacional
- ✅ Responsividade testada
- ✅ Performance otimizada

### **Validação:**
- ✅ Sintaxe nginx: OK
- ✅ Configuração carregada
- ✅ Rota `/rps/` ativa
- ✅ Proxy reverso funcionando
- ✅ Simulação totalmente funcional

## 📝 **Histórico de Implementação**

### **Data: 26/08/2025**
- ✅ Criada simulação RPS Battle
- ✅ Configurado nginx para rota `/rps/`
- ✅ Implementada interface interativa
- ✅ Lógica de simulação completa
- ✅ Documentação criada

## 🎯 **Próximas Implementações**

### **Fase 1: Melhorias**
- [ ] Adicionar sons de batalha e colisão
- [ ] Implementar histórico de batalhas
- [ ] Adicionar estatísticas detalhadas
- [ ] Modo escuro/claro

### **Fase 2: Funcionalidades Avançadas**
- [ ] Modo multiplayer online
- [ ] Diferentes cenários de batalha
- [ ] Torneios automáticos
- [ ] Ranking de vencedores

### **Fase 3: Expansão**
- [ ] Adicionar Lizard e Spock (RPSLS)
- [ ] Diferentes tipos de terreno
- [ ] Power-ups especiais
- [ ] Modo história

### **Fase 4: Integração**
- [ ] Sub-git configurado
- [ ] CI/CD pipeline
- [ ] Monitoramento de uso
- [ ] Backup automático

## 📞 **Contato e Suporte**

- **Projeto**: 🎮 RPS - Rock Paper Scissors Battle Simulation
- **Localização**: `/home/opc/projetos/rps/`
- **URL**: `https://webplace.cc/rps/`
- **Status**: 🟢 Simulação funcional e pronta para uso

---

*Última atualização: 26/08/2025*
*Status: 🟢 Simulação criada e configurada*
*Próximo: Implementar melhorias e sub-git*
