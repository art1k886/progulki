/**
 * ФАЙЛ ГЛОБАЛЬНЫХ НАСТРОЕК (CONFIG)
 * Позволяет управлять всеми параметрами физики, отображения и интерфейса.
 */
const appConfig = {
    // 1. НАСТРОЙКИ СЕНСОРОВ И ДАТЧИКОВ
    sensors: {
        useAccelerometer: true,        // Использовать акселерометр для отсечения дрейфа на столе
        motionThreshold: 0.6,          // Порог срабатывания движения (м/с²). Ниже этого значения телефон считается неподвижным
        gpsMinDistanceMeter: 0.2,      // Минимальный шаг записи (в метрах) при движении
        gpsMaxAccuracyMeter: 25,       // Игнорировать точки с погрешностью больше N метров
        smoothAlpha: 0.8               // Плавность сглаживания (0.1 - максимальная фильтрация, 1.0 - сырые данные "миллиметр в миллиметр")
    },

    // 2. ВНЕШНИЙ ВИД И ТЕМЫ (UI)
    ui: {
        theme: 'dark',                 // 'dark' (ночная) или 'light' (дневная)
        defaultLayer: 'osm',           // 'osm' (Mono), 'topo' (Зеленая топографическая), 'sat' (Google Спутник)
        animSpeedFps: 120,              // Ограничение кадров анимаций (60 или 120 FPS)
        showAccuracyBadge: true
    },

    // 3. СТИЛИЗАЦИЯ И ЦВЕТА ТРЭКОВ
    tracks: {
        lineWidth: 5,                  // Толщина линии маршрута
        lineOutlineWidth: 8,           // Толщина контрастной обводки
        colors: {
            dark: {
                osm: { line: '#ffffff', stroke: '#000000', point: '#ffffff' },
                topo: { line: '#e63946', stroke: '#ffffff', point: '#e63946' },
                sat: { line: '#00f0ff', stroke: '#000000', point: '#00f0ff' }
            },
            light: {
                osm: { line: '#000000', stroke: '#ffffff', point: '#000000' },
                topo: { line: '#d90429', stroke: '#ffffff', point: '#d90429' },
                sat: { line: '#023e8a', stroke: '#ffffff', point: '#023e8a' }
            }
        }
    }
};
