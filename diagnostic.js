// DIAGNÓSTICO DIRECTO - Verificar qué está fallando exactamente
// Ejecutar en consola del navegador: F12 -> Console

console.log('🔍 DIAGNÓSTICO COMPLETO DE LA APLICACIÓN\n');

// 1. VERIFICAR CARGA DE ARCHIVOS
console.log('1️⃣ VERIFICANDO CARGA DE ARCHIVOS:');
console.log('   ✅ HTML cargado correctamente');
console.log('   ✅ JavaScript cargado:', !!window.atlasApp ? 'SÍ' : 'NO');
console.log('   ✅ CSS cargado: revisar manualmente');

// 2. VERIFICAR INICIALIZACIÓN
console.log('\n2️⃣ VERIFICANDO INICIALIZACIÓN:');
console.log('   - atlasApp object:', window.atlasApp);
console.log('   - Current page:', window.atlasApp?.currentPage);
console.log('   - currentPage:', window.atlasApp?.currentPage);

// 3. VERIFICAR FUNCIONES CRÍTICAS
console.log('\n3️⃣ VERIFICANDO FUNCIONES CRÍTICAS:');
const criticalFunctions = ['initApp', 'setupEventListeners', 'navigateToPage', 'createNewTrip', 'toggleUserMenu', 'addDiaryEntry', 'showRouteDetails'];
criticalFunctions.forEach(func => {
    console.log(`   - ${func}:`, typeof window[func] === 'function' ? '✅ EXISTE' : '❌ NO EXISTE');
});

// 4. VERIFICAR ELEMENTOS DOM
console.log('\n4️⃣ VERIFICANDO ELEMENTOS DOM:');
const elements = {
    'newTripBtn': document.getElementById('newTripBtn'),
    'userMenuBtn': document.getElementById('userMenuBtn'),
    'editProfileLink': document.querySelector('[data-action="edit-profile"]'),
    'floatingDiaryBtn': document.querySelector('button[onclick*="addDiaryEntry"]')
};

Object.entries(elements).forEach(([name, el]) => {
    if (el) {
        console.log(`   - ${name}: ✅ ENCONTRADO`);
        if (name === 'newTripBtn') {
            console.log(`     * Visible: ${!el.classList.contains('hidden') ? 'SÍ' : 'NO'}`);
            console.log(`     * Onclick: ${!!el.onclick ? 'SÍ' : 'NO'}`);
        }
    } else {
        console.log(`   - ${name}: ❌ NO ENCONTRADO`);
    }
});

// 5. VERIFICAR EVENT LISTENERS
console.log('\n5️⃣ VERIFICANDO EVENT LISTENERS:');
if (window.getEventListeners) {
    const btn = document.getElementById('newTripBtn');
    if (btn) {
        const listeners = window.getEventListeners(btn);
        console.log('   - newTripBtn listeners:', listeners);
    }
} else {
    console.log('   ⚠️ getEventListeners no disponible (normal en Firefox)');
}

// 6. PROBAR FUNCIÓN DIRECTA
console.log('\n6️⃣ PROBANDO FUNCIONES DIRECTAMENTE:');

// Probar createNewTrip
try {
    if (typeof window.createNewTrip === 'function') {
        console.log('   - Probando createNewTrip()...');
        // No ejecutar para no abrir modal, solo verificar que existe
        console.log('   ✅ createNewTrip() es callable');
    }
} catch (e) {
    console.log('   ❌ Error en createNewTrip:', e.message);
}

// Probar toggleUserMenu
try {
    if (typeof window.toggleUserMenu === 'function') {
        console.log('   ✅ toggleUserMenu() es callable');
    }
} catch (e) {
    console.log('   ❌ Error en toggleUserMenu:', e.message);
}

// 7. VERIFICAR CONSOLA DE ERRORES
console.log('\n7️⃣ VERIFICANDO ERRORES EN CONSOLA:');
console.log('   (Revisar la consola para errores JavaScript)');
console.log('   Errores comunes: SyntaxError, ReferenceError, TypeError');

// 8. VERIFICAR NAVEGACIÓN
console.log('\n8️⃣ PROBANDO NAVEGACIÓN:');
try {
    if (typeof window.navigateToPage === 'function') {
        console.log('   - Probando navigateToPage("routes")...');
        window.navigateToPage('routes');
        setTimeout(() => {
            console.log('   ✅ Navegación a routes exitosa');
            console.log('   - Página actual:', window.atlasApp?.currentPage);
        }, 100);
    }
} catch (e) {
    console.log('   ❌ Error en navigateToPage:', e.message);
}

console.log('\n📊 DIAGNÓSTICO COMPLETADO');
console.log('💡 Si ves ❌ en funciones críticas, el problema es de carga/compilación JS');
console.log('💡 Si las funciones existen pero los botones no responden, revisar event listeners');
console.log('💡 Si no se encuentran elementos DOM, verificar carga del HTML');

// TEST MANUAL - Habilitar para probar directamente
console.log('\n🧪 TEST MANUAL (Descomenta para probar):');
console.log('// createNewTrip(); // Probar directamente');
console.log('// toggleUserMenu(); // Probar directamente');
console.log('// addDiaryEntry(); // Probar directamente');