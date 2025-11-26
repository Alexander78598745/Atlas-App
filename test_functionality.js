// Script de testing para verificar todas las funcionalidades de la app
// Ejecutar en consola del navegador en http://localhost:3004

console.log('🧪 INICIANDO TESTS DE FUNCIONALIDAD\n');

// Test 1: Botón "+ Nuevo Viaje"
console.log('1️⃣ TESTING: Botón "+ Nuevo Viaje"');
const nuevoViajeBtn = document.getElementById('newTripBtn');
if (nuevoViajeBtn) {
    console.log('✅ Botón encontrado en DOM');
    console.log('   Visible:', !nuevoViajeBtn.classList.contains('hidden'));
    console.log('   Tiene onclick:', !!nuevoViajeBtn.onclick);
    console.log('   Event listeners:', getEventListeners ? getEventListeners(nuevoViajeBtn).length : 'N/A');
    
    // Test click
    if (typeof createNewTrip === 'function') {
        console.log('✅ createNewTrip() existe');
    } else {
        console.log('❌ createNewTrip() NO existe');
    }
} else {
    console.log('❌ Botón "newTripBtn" NO encontrado en DOM');
}

// Test 2: Menú de usuario
console.log('\n2️⃣ TESTING: Menú de usuario');
const userMenuBtn = document.getElementById('userMenuBtn');
if (userMenuBtn) {
    console.log('✅ Botón menú usuario encontrado');
    console.log('   Tiene data-action:', userMenuBtn.getAttribute('data-action'));
    console.log('   Event listeners:', getEventListeners ? getEventListeners(userMenuBtn).length : 'N/A');
} else {
    console.log('❌ Botón menú usuario NO encontrado');
}

// Test link editar perfil
const editProfileLink = document.querySelector('[data-action="edit-profile"]');
if (editProfileLink) {
    console.log('✅ Link editar perfil encontrado');
} else {
    console.log('❌ Link editar perfil NO encontrado');
}

// Test 3: Página Rutas - botón "Ver detalles"
console.log('\n3️⃣ TESTING: Página Rutas - botón "Ver detalles"');
// Navegar a rutas
if (typeof navigateToPage === 'function') {
    navigateToPage('routes');
    setTimeout(() => {
        const verDetallesBtns = document.querySelectorAll('button[onclick*="showRouteDetails"]');
        console.log('✅ Encontrados botones "Ver detalles":', verDetallesBtns.length);
        
        verDetallesBtns.forEach((btn, i) => {
            console.log(`   Botón ${i+1}:`, btn.textContent.trim());
        });
        
        if (typeof showRouteDetails === 'function') {
            console.log('✅ showRouteDetails() existe');
        } else {
            console.log('❌ showRouteDetails() NO existe');
        }
    }, 500);
} else {
    console.log('❌ navigateToPage() NO existe');
}

// Test 4: Página Diario - botón flotante "+"
console.log('\n4️⃣ TESTING: Página Diario - botón flotante "+"');
navigateToPage('diary');
setTimeout(() => {
    const floatingBtn = document.querySelector('.fixed.bottom-6.right-6, .fab, button[class*="floating"], button[id*="floating"]');
    if (floatingBtn) {
        console.log('✅ Botón flotante encontrado');
        console.log('   Texto:', floatingBtn.textContent.trim());
        console.log('   Classes:', floatingBtn.className);
    } else {
        console.log('❌ Botón flotante NO encontrado');
        
        // Buscar cualquier botón con +
        const plusBtns = document.querySelectorAll('button');
        plusBtns.forEach((btn, i) => {
            if (btn.textContent.includes('+')) {
                console.log(`   Botón + encontrado ${i}:`, btn.textContent.trim(), 'Classes:', btn.className);
            }
        });
    }
    
    if (typeof addDiaryEntry === 'function') {
        console.log('✅ addDiaryEntry() existe');
    } else {
        console.log('❌ addDiaryEntry() NO existe');
    }
}, 500);

// Test 5: Página Planificador - presupuesto
console.log('\n5️⃣ TESTING: Página Planificador - presupuesto');
navigateToPage('planner');
setTimeout(() => {
    const budgetInputs = document.querySelectorAll('input[type="number"], input[class*="budget"], input[class*="price"]');
    console.log('✅ Inputs de presupuesto encontrados:', budgetInputs.length);
    
    budgetInputs.forEach((input, i) => {
        console.log(`   Input ${i+1}:`, input.placeholder || input.className, 'Value:', input.value);
    });
    
    // Buscar función de cálculo automático
    const calcFunctions = ['calculateBudget', 'updateBudget', 'autoCalculate', 'calculateTotal'];
    calcFunctions.forEach(funcName => {
        if (typeof window[funcName] === 'function') {
            console.log(`✅ ${funcName}() existe`);
        }
    });
}, 500);

// Test 6: Mapa interactivo
console.log('\n6️⃣ TESTING: Mapa interactivo');
const mapElement = document.getElementById('interactiveMap, .map, [class*="map"]');
if (mapElement) {
    console.log('✅ Elemento mapa encontrado');
    console.log('   Visible:', mapElement.offsetWidth > 0 && mapElement.offsetHeight > 0);
} else {
    console.log('❌ Elemento mapa NO encontrado');
}

if (typeof showInteractiveMap === 'function') {
    console.log('✅ showInteractiveMap() existe');
} else {
    console.log('❌ showInteractiveMap() NO existe');
}

// Test global de funciones
console.log('\n🌍 TESTING: Funciones globales disponibles');
const globalFunctions = ['initApp', 'setupEventListeners', 'navigateToPage', 'createNewTrip', 'toggleUserMenu', 'addDiaryEntry', 'showInteractiveMap', 'initializeBudgetCalculator'];
globalFunctions.forEach(funcName => {
    if (typeof window[funcName] === 'function') {
        console.log(`✅ ${funcName}()`);
    } else {
        console.log(`❌ ${funcName}()`);
    }
});

console.log('\n🏁 TESTS COMPLETADOS');
console.log('📝 Copia y pega los resultados para análisis detallado');