// Script de prueba para verificar el estado de la aplicación Atlas
console.log("🧪 TESTING ATLAS APP STATUS");

// Función para ejecutar en consola del navegador
function testAtlasApp() {
    console.log("=== ATLAS APP DIAGNOSTIC ===");
    
    // 1. Verificar atlasApp
    if (typeof atlasApp === 'undefined') {
        console.error("❌ atlasApp is not defined");
        return;
    }
    
    console.log("✅ atlasApp is defined");
    console.log("📊 Atlas app trips count:", atlasApp.trips?.length || 0);
    console.log("📋 Atlas app trips:", atlasApp.trips || []);
    
    // 2. Verificar elementos HTML críticos
    const elementsToCheck = [
        'recentTripsList',
        'noTripsMessage',
        'totalTripsCount',
        'routesGrid'
    ];
    
    elementsToCheck.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            console.log(`✅ Element ${id} found`);
        } else {
            console.warn(`❌ Element ${id} NOT found`);
        }
    });
    
    // 3. Verificar localStorage
    const tripsFromStorage = localStorage.getItem('atlasTrips');
    if (tripsFromStorage) {
        const parsedTrips = JSON.parse(tripsFromStorage);
        console.log("💾 LocalStorage trips count:", parsedTrips.length);
        console.log("💾 LocalStorage trips:", parsedTrips);
    } else {
        console.log("💾 No trips in localStorage");
    }
    
    // 4. Verificar páginas activas
    const pages = document.querySelectorAll('.page');
    let activePage = null;
    pages.forEach(page => {
        if (!page.classList.contains('hidden')) {
            activePage = page.id;
        }
    });
    console.log("📱 Current active page:", activePage);
    
    // 5. Ejecutar funciones manualmente si es necesario
    console.log("\n=== MANUAL FUNCTION TESTING ===");
    
    try {
        if (typeof loadRecentTrips === 'function') {
            console.log("🔄 Executing loadRecentTrips()...");
            loadRecentTrips();
        } else {
            console.error("❌ loadRecentTrips function not found");
        }
    } catch (error) {
        console.error("❌ Error executing loadRecentTrips:", error);
    }
    
    try {
        if (typeof updateStatistics === 'function') {
            console.log("🔄 Executing updateStatistics()...");
            updateStatistics();
        } else {
            console.error("❌ updateStatistics function not found");
        }
    } catch (error) {
        console.error("❌ Error executing updateStatistics:", error);
    }
    
    try {
        if (typeof updateUI === 'function') {
            console.log("🔄 Executing updateUI()...");
            updateUI();
        } else {
            console.error("❌ updateUI function not found");
        }
    } catch (error) {
        console.error("❌ Error executing updateUI:", error);
    }
}

// Hacer disponible globalmente
window.testAtlasApp = testAtlasApp;

console.log("✅ Test script loaded. Run testAtlasApp() in console to test.");