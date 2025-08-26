const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota de health check
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        service: '🎮 RPS - Rock Paper Scissors Battle Simulation',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        description: 'Simulação de batalha entre Pedra, Papel e Tesoura'
    });
});

// Rota de status
app.get('/status', (req, res) => {
    res.json({
        project: '🎮 RPS - Rock Paper Scissors Battle Simulation',
        version: '1.0.0',
        status: 'running',
        port: port,
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString(),
        description: 'Simulação interativa de batalha entre elementos RPS',
        features: [
            'Simulação em tempo real',
            'Modo interativo com campos gravitacionais',
            'Modo gangue com aliados',
            'Velocidade dinâmica baseada na quantidade',
            'Canvas HTML5 responsivo'
        ]
    });
});

// Middleware para logs
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error('Erro:', err);
    res.status(500).json({
        error: 'Erro interno do servidor',
        message: err.message
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`🎮 RPS - Rock Paper Scissors Battle Simulation rodando na porta ${port}`);
    console.log(`🌐 URL: http://localhost:${port}/`);
    console.log(`🔍 Health: http://localhost:${port}/health`);
    console.log(`📊 Status: http://localhost:${port}/status`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Recebido SIGTERM, encerrando servidor...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 Recebido SIGINT, encerrando servidor...');
    process.exit(0);
});
