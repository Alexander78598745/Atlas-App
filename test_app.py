import requests
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options

def test_atlas_app():
    print("🧪 INICIANDO PRUEBAS DE LA APLICACIÓN ATLAS...")
    
    # Setup Chrome options
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    
    try:
        # Initialize driver
        driver = webdriver.Chrome(options=chrome_options)
        driver.get("http://localhost:3004/index.html")
        time.sleep(3)
        
        print("✅ Página cargada exitosamente")
        
        # Test 1: Navigation Menu
        print("\n📍 PRUEBA 1: Navegación del menú")
        
        # Test Rutas
        try:
            rutas_btn = driver.find_element(By.CSS_SELECTOR, "button[onclick*='routesPage']")
            print("  - Botón 'Rutas' encontrado")
            rutas_btn.click()
            time.sleep(1)
            routes_visible = driver.find_element(By.ID, "routesPage").is_displayed()
            print(f"  - ¿Se muestra la página Rutas? {routes_visible}")
        except Exception as e:
            print(f"  ❌ Error en botón Rutas: {e}")
        
        # Test Diario  
        try:
            diario_btn = driver.find_element(By.CSS_SELECTOR, "button[onclick*='diaryPage']")
            print("  - Botón 'Diario' encontrado")
            diario_btn.click()
            time.sleep(1)
            diary_visible = driver.find_element(By.ID, "diaryPage").is_displayed()
            print(f"  - ¿Se muestra la página Diario? {diary_visible}")
        except Exception as e:
            print(f"  ❌ Error en botón Diario: {e}")
        
        # Test Planificador
        try:
            planificador_btn = driver.find_element(By.CSS_SELECTOR, "button[onclick*='plannerPage']")
            print("  - Botón 'Planificador' encontrado")
            planificador_btn.click()
            time.sleep(1)
            planner_visible = driver.find_element(By.ID, "plannerPage").is_displayed()
            print(f"  - ¿Se muestra la página Planificador? {planner_visible}")
        except Exception as e:
            print(f"  ❌ Error en botón Planificador: {e}")
        
        # Test Perfil
        try:
            perfil_btn = driver.find_element(By.CSS_SELECTOR, "button[onclick*='profilePage']")
            print("  - Botón 'Perfil' encontrado")
            perfil_btn.click()
            time.sleep(1)
            profile_visible = driver.find_element(By.ID, "profilePage").is_displayed()
            print(f"  - ¿Se muestra la página Perfil? {profile_visible}")
        except Exception as e:
            print(f"  ❌ Error en botón Perfil: {e}")
        
        # Test 2: Camera Button
        print("\n📷 PRUEBA 2: Botón de cámara")
        
        try:
            camera_btn = driver.find_element(By.CSS_SELECTOR, "button[onclick*='addPhotoToTrip']")
            print("  - Botón de cámara 📷 encontrado")
            camera_btn.click()
            time.sleep(1)
            
            # Check if modal exists
            modal = driver.find_element(By.ID, "photoModal")
            modal_visible = modal.is_displayed()
            print(f"  - ¿Se abre el modal de fotos? {modal_visible}")
            
            if modal_visible:
                print("  ✅ Modal de fotos se abre correctamente")
            else:
                print("  ❌ Modal de fotos NO se abre")
                
        except Exception as e:
            print(f"  ❌ Error con botón de cámara: {e}")
        
        # Test 3: Nueva Entrada
        print("\n➕ PRUEBA 3: Botón 'Nueva Entrada'")
        
        try:
            nueva_entrada_btn = driver.find_element(By.CSS_SELECTOR, "button[onclick*='addNewEntry']")
            print("  - Botón '➕ Nueva Entrada' encontrado")
            nueva_entrada_btn.click()
            time.sleep(1)
            
            # Check if modal exists
            modal = driver.find_element(By.ID, "entryModal")
            modal_visible = modal.is_displayed()
            print(f"  - ¿Se abre el modal de nueva entrada? {modal_visible}")
            
            if modal_visible:
                print("  ✅ Modal de nueva entrada se abre correctamente")
            else:
                print("  ❌ Modal de nueva entrada NO se abre")
                
        except Exception as e:
            print(f"  ❌ Error con botón Nueva Entrada: {e}")
        
        # Check JavaScript Console
        print("\n🐛 VERIFICANDO ERRORES EN CONSOLA...")
        logs = driver.get_log('browser')
        if logs:
            print("Errores encontrados:")
            for log in logs:
                print(f"  - {log['level']}: {log['message']}")
        else:
            print("✅ No hay errores en consola")
        
        driver.quit()
        print("\n🎯 PRUEBAS COMPLETADAS")
        
    except Exception as e:
        print(f"❌ Error durante las pruebas: {e}")
        if 'driver' in locals():
            driver.quit()

if __name__ == "__main__":
    test_atlas_app()
