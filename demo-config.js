// Configuración de Demostración para Atlas
// Este archivo permite alternar fácilmente entre modo demo y Firebase real

// Configuración de Demo
export const DemoConfig = {
    // Modo de funcionamiento
    useDemoMode: true, // Cambia a false para usar Firebase real
    
    // Datos de demostración
    demoUser: {
        uid: 'demo-user',
        email: 'demo@atlas.com',
        displayName: 'Usuario Demo',
        photoURL: null
    },
    
    // Mensaje del banner
    demoBannerMessage: '🚀 Atlas en modo DEMO - ¡Explora todas las funciones! (Configura Firebase para guardar datos reales)',
    firebaseBannerMessage: '✅ Atlas conectado a Firebase - Todas las funciones activas',
    
    // Instrucciones para el usuario
    demoInstructions: {
        enabled: true,
        showOnDashboard: true,
        message: '💡 Esta es una versión de demostración con datos de ejemplo. ¡Navega por todas las secciones!'
    }
};

// Función para alternar modo
export function toggleDemoMode(enableDemo = true) {
    DemoConfig.useDemoMode = enableDemo;
    localStorage.setItem('atlas_demo_mode', enableDemo ? 'true' : 'false');
    
    // Actualizar banner si existe
    updateBannerStatus(enableDemo);
    
    console.log(`Atlas configurado en modo: ${enableDemo ? 'DEMO' : 'FIREBASE'}`);
}

// Función para verificar modo guardado
export function loadSavedMode() {
    const saved = localStorage.getItem('atlas_demo_mode');
    if (saved !== null) {
        DemoConfig.useDemoMode = saved === 'true';
    }
    return DemoConfig.useDemoMode;
}

// Función para actualizar banner
function updateBannerStatus(isDemoMode) {
    const banner = document.getElementById('statusBanner');
    const statusText = document.getElementById('statusText');
    
    if (banner && statusText) {
        if (isDemoMode) {
            banner.className = banner.className.replace(/bg-green-500/g, 'bg-blue-500');
            statusText.textContent = DemoConfig.demoBannerMessage;
        } else {
            banner.className = banner.className.replace(/bg-blue-500/g, 'bg-green-500');
            statusText.textContent = DemoConfig.firebaseBannerMessage;
        }
    }
}

// Función para crear datos de ejemplo adicionales
export function createDemoData() {
    return {
        // Estadísticas de demostración
        stats: {
            totalTrips: 8,
            countriesVisited: 4,
            citiesExplored: 12,
            photosTaken: 145,
            totalDistance: '12,450 km',
            favoriteDestination: 'París'
        },
        
        // Logros de demostración
        achievements: [
            { id: 'first_trip', name: 'Primer Viaje', description: 'Completaste tu primer viaje', earned: true },
            { id: 'photo_lover', name: 'Amante de la Fotografía', description: 'Subiste más de 100 fotos', earned: true },
            { id: 'budget_master', name: 'Maestro del Presupuesto', description: 'Te mantuviste dentro del presupuesto', earned: true },
            { id: 'adventure_seeker', name: 'Buscador de Aventuras', description: 'Visitaste 5 países diferentes', earned: true },
            { id: 'culture_explorer', name: 'Explorador Cultural', description: 'Visitaste 10 museos', earned: false },
            { id: 'foodie', name: 'Foodie', description: 'Probaste comida local en 5 países', earned: true },
            { id: 'early_bird', name: 'Madrugador', description: 'Tomaste un vuelo antes de las 6 AM', earned: false },
            { id: 'digital_nomad', name: 'Nómada Digital', description: 'Trabajaste mientras viajabas', earned: false }
        ],
        
        // Actividades recientes
        recentActivity: [
            { type: 'trip_created', title: 'Viaje a Barcelona creado', date: '2024-09-15' },
            { type: 'diary_entry', title: 'Entrada añadida al diario de París', date: '2024-09-10' },
            { type: 'photo_uploaded', title: 'Fotos subidas del Road Trip', date: '2024-09-08' },
            { type: 'budget_updated', title: 'Presupuesto actualizado para París', date: '2024-09-05' },
            { type: 'achievement_earned', title: '🏆 Logro desbloqueado: Amante de la Fotografía', date: '2024-09-03' }
        ],
        
        // Sugerencias de viaje
        suggestions: [
            { destination: 'Kyoto', country: 'Japón', reason: 'Mejor época para ver cerezos en flor', estimatedCost: '€1,800' },
            { destination: 'Islandia', country: 'Islandia', reason: 'Aurora boreal y paisajes únicos', estimatedCost: '€2,200' },
            { destination: 'Marrakech', country: 'Marruecos', reason: 'Cultura y gastronomía exótica', estimatedCost: '€950' },
            { destination: 'Nueva Zelanda', country: 'Nueva Zelanda', reason: 'Aventuras al aire libre increíbles', estimatedCost: '€3,500' },
            { destination: 'Lisboa', country: 'Portugal', reason: 'Ciudad europea accesible y bonita', estimatedCost: '€650' }
        ]
    };
}

// Exportar configuración
export default DemoConfig;