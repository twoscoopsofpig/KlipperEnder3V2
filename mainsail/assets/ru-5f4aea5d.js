const e={Notifications:{DependencyDescription:"Текущая версия {name}, не поддерживает все функции Mainsail. Обновите версию {name} до последней {neededVersion}.",DependencyName:"Зависимость: {name}",DismissAll:"Очистить всё",KlipperWarnings:{DeprecatedOption:"Опция '{option}' в '{section}' устарела и будет удалена в будущих релизах.",DeprecatedOptionHeadline:"Устаревшая опция Klipper",DeprecatedValue:"Значение '{value}' в опции '{option}' в '{section}' устарела и будет удалена в будущих релизах.",DeprecatedValueHeadline:"Устаревшее значение Klipper",KlipperWarning:"Предупреждение Klipper"},MoonrakerWarnings:{MoonrakerComponent:"Moonraker: {component}",MoonrakerFailedComponentDescription:"Произошла ошибка при загрузке компонента Moonraker '{component}'. Посмотрите log-файл и исправьте ошибку.",MoonrakerWarning:"Предупреждение Moonraker",UnparsedConfigOption:"Нераспознанное значение в параметре '{option}: {value}' в [{section}]. Возможно, это результат сбоя загрузки модуля или параметр уже не поддерживается. В будущем, может вызывать ошибку при загрузке.",UnparsedConfigSection:"Нераспознанная секция [{section}]. Возможно, это результат сбоя загрузки модуля или параметр уже не поддерживается. В будущем, может вызывать ошибку при загрузке."},Never:"никогда",NextReboot:"следующая перезагрузка",NoNotification:"Нет уведомлений",Notifications:"Уведомления",Remind:"Напоминать:"},NumberInput:{GreaterOrEqualError:"Должно быть больше или равно {min}!",MustBeBetweenError:"Должно быть между {min} и {max}!",NoEmptyAllowedError:"Ввод не должен быть пустым!"},Printers:"Принтеры",ThrottledStates:{DescriptionCurrentlyThrottled:"Перегрев ЦПУ, включено ограничение производительности.",DescriptionFrequencyCapped:"Максимальная частота ЦПУ ограничена до 1,2 ГГц.",DescriptionPreviouslyFrequencyCapped:"Максимальная частота ЦПУ, по крайней мере один раз, была ограничена до 1,2 ГГц с момента включения.",DescriptionPreviouslyTemperatureLimited:"(3A+/3B+ только) температура была выше программного ограничения (по умолчанию 60С), по крайней мере один раз, с момента включения.",DescriptionPreviouslyThrottled:"Включалось ограничение производительности, по крайне мере один раз, с момента включения.",DescriptionPreviouslyUnderVolted:"Напряжение питания понижалось ниже 4.65В, по крайней мере один раз, с момента включения.",DescriptionTemperatureLimitActive:"(3A+/3B+ только) текущая температура сейчас выше программного ограничения (по умолчанию 60C).",DescriptionUnderVoltageDetected:"Напряжение питания сейчас ниже 4.65В",TitleCurrentlyThrottled:"Ограничение производительности",TitleFrequencyCapped:"Частота ограничена",TitlePreviouslyFrequencyCapped:"Ранее было ограничение частоты",TitlePreviouslyTemperatureLimited:"Ранее была предельная температура",TitlePreviouslyThrottled:"Ранее было ограничение производительности",TitlePreviouslyUnderVolted:"Ранее было пониженное напряжение питания",TitleTemperatureLimitActive:"Достигнута предельная температура",TitleUnderVoltageDetected:"Выявлено пониженное напряжение питания"},Titles:{Complete:"Завершено - {filename}",Error:"ОШИБКА",Pause:"Пауза печати",PrinterOff:"Принтер выключен",Printing:"{percent}% напечатано - {filename}",PrintingETA:"{percent}% напечатано - Завершение: {eta} - {filename}"},TopBar:{CannotUploadTheFile:"Не получается загрузить файл!",EmergencyStop:"Аварийная остановка",SAVE_CONFIG:"Сохранить конфигурацию",Uploading:"Загрузка",UploadOfFileSuccessful:"Загрузка {file} выполнена!",UploadPrint:"Загрузить и напечатать"},TopCornerMenu:{Cancel:"Отмена",ConfirmationDialog:{Description:{HostReboot:"Перезагрузка хоста вызовет ошибку текущей печати!",HostShutdown:"Выключение хоста вызовет ошибку текущей печати!",KlipperFirmwareRestart:"Перезапуск прошивки Klipper вызовет ошибку текущей печати!",KlipperRestart:"Перезапуск Klipper вызовет ошибку текущей печати!",KlipperStop:"Остановка Klipper вызовет ошибку текущей печати!",ServiceRestart:"Перезапуск этого сервиса вызовет ошибку текущей печати!",ServiceStart:"Запуск этого сервиса вызовет ошибку текущей печати!",ServiceStop:"Остановка этого сервиса вызовет ошибку текущей печати!"},Title:{HostReboot:"Перезагрузка хоста",HostShutdown:"Выключение хоста",KlipperFirmwareRestart:"Перезагрузка прошивки Klipper",KlipperRestart:"Перезагрузка Klipper",ServiceRestart:"Перезагрузка сервиса",ServiceStart:"Запуск сервиса",ServiceStop:"Остановка сервиса"}},HostControl:"Управление хостом",KlipperControl:"Управление Klipper",KlipperFirmwareRestart:"Перезапуск прошивки",KlipperRestart:"Перезапуск",PowerDevices:"Устройство питания",Reboot:"Перезагрузка",Restart:"Перезапуск",ServiceControl:"Управление сервисами",Shutdown:"Выключение",Start:"Запуск",Stop:"Остановка"},UpdateDialog:{Close:"Закрыть",Empty:"Пусто",Recovering:"Восстановление {software}...",RecoveringDone:"Восстановление {software} выполнено!",Updating:"Обновление {software}...",UpdatingDone:"Обновление {software} выполнено!"}},t={Abort:"отказаться",Accept:"принять",Adjusted:"отрегулировано",Description:"Нажмите <b>ОТРЕГУЛИРОВАНО</b> если текущий винт отрегулирован. Нажмите <b>ПРИНЯТЬ</b> чтобы пропустить регулировку этого винта.",Headline:"Винты стола",ScrewAccepted:"Винты приняты",ScrewIndex:"Индекс винта",ScrewName:"Название винта",ScrewOutput:"{current} из {max}"},i={CannotConnectTo:"Не удаётся подключиться к Moonraker ({host}).",CheckMoonrakerLog:"Если это сообщение появляется неоднократно, посмотрите log-файл в:",Connecting:"Подключение к {host}",Failed:"Подключение не удалось",Initializing:"Инициализация",TryAgain:"Подключиться"},r={CommandList:"Список команд",Empty:"Пусто",HideTemperatures:"Скрыть температуры",HideTimelapse:"Скрыть таймлапсы",SendCode:"Команда...",SetupConsole:"Настройка консоли"},a={StartPrint:{Cancel:"Отмена",DoYouWantToStartFilename:"Начать печать {filename}?",Headline:"Начало задачи",Print:"печать",Timelapse:"Таймлапс"}},o={ConfigReference:"Справочник конфигурирования",DontSave:"Не сохранять",Downloading:"Загрузка",FailedSave:"{filename} не может быть сохранён!",FileReadOnly:"только-чтение",SaveClose:"Сохранить и закрыть",SaveRestart:"Сохранить и перезапустить",SuccessfullySaved:"{filename} успешно сохарнён.",UnsavedChanges:"Несохранённые изменения",UnsavedChangesMessage:"Сохранить изменения внесённые в {filename}?",UnsavedChangesSubMessage:"Изменения будут утеряны, если не сохраните их. Вы можете отключить это уведомление, в настройках редактора.",Uploading:"Сохранение"},n={AreYouSure:"Подтвердите действие",EmergencyStop:"Аварийная остановка",No:"Нет",Yes:"Да"},s={AddBatchToQueue:"Добавить серию в очередь",AddToQueue:"Добавить в очередь",AllFiles:"Все",BedTemp:"Темп. стола",Cancel:"Отмена",ChamberTemp:"Темп. терм.-камеры",Count:"Количество",Create:"Создать",CreateNewDirectory:"Создать новую директорию",CurrentPath:"Текущий путь",Delete:"Удалить",DeleteDirectory:"Удалить директорию",DeleteDirectoryQuestion:'Удалить директорию "{name}" и всё её содержимое?',DeleteSelectedQuestion:"Удалить выбранные файлы ({count} шт.)?",Download:"Скачать",Duplicate:"Копировать",DuplicateFile:"Копировать файл",EditFile:"Редактировать файл",Empty:"Пусто",ExtruderTemp:"Темп. экструдера",Filament:"Филамент",FilamentName:"Назв. филамента",FilamentType:"Тип филамента",FilamentUsage:"Расх. филамента",FilamentWeight:"Вес филамента",Files:"Отображение файлов",Filesize:"Размер файла",Free:"Свободно",FreeDisk:"Свободно на диске",GCodeFiles:"Файлы G-кода",GcodesRootDirectoryDoesntExists:'Не найдена директория для G-кодов. Проверьте опцию "path" в [virtual_sdcard] конфигурации Klipper (printer.cfg).',HiddenFiles:"Скрытые файлы",InvalidNameAlreadyExists:"Имя уже существует, введите другое.",InvalidNameEmpty:"Ввод не должен быть пустым!",LastEndTime:"Посл. конец печати",LastFilamentUsed:"Посл. расх. филамента",LastModified:"Посл. изменение",LastPrintDuration:"Посл. длит. печати",LastStartTime:"Посл. время начала",LastTotalDuration:"Посл. общ. длит.",LayerHeight:"Высота слоя",Name:"Имя файла",NewDirectory:"Новая директория",NozzleDiameter:"Диаметр сопла",ObjectHeight:"Высота детали",Preheat:"Преднагрев",PrintedFiles:"Напечатанные файлы",PrintStart:"Начало печати",PrintTime:"Длит. печати",RefreshCurrentDirectory:"Обновить текущую директорию",Rename:"Переименовать",RenameDirectory:"Переименовать директорию",RenameFile:"Переименовать файл",ScanMeta:"Прочитать метаданные",ScanMetaSuccess:"Метаданные успешно прочитаны из: {filename}.",Search:"Поиск...",SetupCurrentList:"Настроить текущий список",Slicer:"Слайсер",SuccessfullyCreated:"{filename} успешно создан.",SuccessfullyDeleted:"{filename} успешно удалён.",SuccessfullyMoved:"{filename} успешно перемещён.",SuccessfullyRenamed:"{filename} успешно переименован.",SuccessfullyUploaded:"{filename} успешно загружен!",Total:"Всего",UploadNewGcode:"Загрузить новый G-код",Used:"Использовано",View3D:"Просмотр 3D"},l={CannotUploadFile:"Не получается загрузить файл!",DropFilesToUploadFiles:"Перетащите файлы для загрузки"},c={ClearLoadedFile:"Очистить",CNCMode:"ЧПУ-режим",ColorMode:"Цветовая схема",Downloading:"Загрузка",ForceLineRendering:"Принуд. рендеринг линий",HDRendering:"HD рендеринг (круглая экструзия)",High:"Высокое",LoadCurrentFile:"Текущий файл",LoadLocal:"Локальный файл",Low:"Низкое",Max:"Максимальное",Medium:"Среднее",ReloadRequired:"Требуется перезагрузка",Rendering:"Рендеринг",RenderQuality:"Качество рендеринга",ShowGCode:"Показать G-код",ShowObjectSelection:"Показать выбор детали",ShowToolhead:"Показать сопло",ShowTravelMoves:"Показать перемещения",SpecularLighting:"Отражения освещения",Title:"Просмотрщик G-кода",Tracking:"Слежение",Transparency:"Прозрачность",Ultra:"Ультра",VoxelMode:"Воксельный режим (ASMBL)"},d={Abort:"отказаться",BedMeshCalibrate:"Калибровка сетки стола",BedMeshRemove:"Удаление сетки стола",Calibrate:"калибровать",Clear:"очистить",CurrentMesh:{Headline:"Текущая сетка",Max:"Максимум",Min:"Минимум",Name:"Название",Range:"Отклонение",Size:"Размеры"},DeleteBedMeshProfile:"Удалить профиль сетки стола",DoYouReallyWantToDelete:'Подтвердите удаление профиля "{name}"',ErrorKlipperNotReady:"Klipper не готов. Карта стола отключена.",Flat:"Плоскость",Heightmap:"Карта стола",InvalidNameAlreadyExists:"Название профиля уже существует, введите другое название профиля.",InvalidNameAscii:"Название не допустимо. Нужно использовать только ASCII-символы.",InvalidNameEmpty:"Ввод не должен быть пустым!",InvalidNameReserved:"Название профиля 'default' зарезервировано, введите другое название профиля.",Later:"Позже",Mesh:"Сетка",Name:"Название",NoBedMeshHasBeenLoadedYet:"Нет сетки стола для отображения",NoProfile:"Нет доступных профилей",Ok:"Хорошо",Probed:"Зондирование",Profiles:"Профили",Remove:"удалить",RemoveSaveDescription:'Профиль сетки стола (bed_mesh) зарегистрирован на удаление. Нажмите "СОХРАНИТЬ КОНФИГУРАЦИЮ" для удаления его из printer.cfg и перезапуска Klipper.',Rename:"переименовать",RenameBedMeshProfile:"Переименовать профиль сетки стола",SAVE_CONFIG:"Сохранить конфигурацию",ScaleGradient:"Масштабировать градиент",ScaleZMax:"Масштабировать отклонение",TitleCalibrate:"Калибровка новой сетки стола",TitleClear:"Очистить сетку стола",TitleHomeAll:"Начальное выравнивание",Wireframe:"Каркас"},p={AddNote:"Добавить примечание",AllJobs:"Все",AvgPrinttime:"Средняя длительность печати",Cancel:"Отмена",Chart:"Диаграмма",CreateNote:"Добавить примечание",Delete:"Удалить",DeleteSelectedQuestion:"Удалить выбранные задачи ({count} шт.)?",Details:"Подробности",EditNote:"Редактировать примечание",Empty:"Пусто",EndTime:"Время окончания печати",EstimatedFilament:"Расч. расх. филамента",EstimatedFilamentWeight:"Расч. вес филамента",EstimatedTime:"Расч. длительность",FilamentCalc:"Расч. расх. филамента",FilamentUsage:"Расход филамента",FilamentUsed:"Расх. филамента",Filename:"Имя файла",Filesize:"Размер файла",FirstLayerBedTemp:"Темп. стола",FirstLayerExtTemp:"Темп. экстр.",FirstLayerHeight:"Выс. перв. слоя",HistoryFilamentUsage:"Филамент",HistoryPrinttimeAVG:"Распечатки",JobDetails:"Подробности задачи",Jobs:"Отображение задач",LastModified:"Посл. изменение",LayerHeight:"Высота слоя",LongestPrinttime:"Самая длительная печать",Note:"Примечание",ObjectHeight:"Высота детали",PrintDuration:"Длит. печати",PrintHistory:"История печати",PrintTime:"Длит. печати",PrinttimeAvg:"Средняя длительность печати",Reprint:"Перепечатать",Save:"сохранить",Search:"Поиск...",SelectedFilamentUsed:"Расход филамента выбранных задач",SelectedJobs:"Выбрано задач",SelectedPrinttime:"Длительность печати выбранных задач",Slicer:"Слайсер",SlicerVersion:"Версия слайсера",StartTime:"Время начала печати",Statistics:"Статистика",Status:"Статус",StatusValues:{cancelled:"Отменено",completed:"Завершено",error:"Ошибка",in_progress:"В процессе",klippy_disconnect:"Klippy откл.",klippy_shutdown:"Klippy выкл.",Others:"Прочее",server_exit:"Выход сервера"},Table:"Таблица",TitleExportHistory:"Экспорт истории",TitleRefreshHistory:"Обновить историю",TitleSettings:"Настройки",TotalDuration:"Общая длительность",TotalFilamentUsed:"Всего израсходованно филамента",TotalJobs:"Всего задач",TotalPrinttime:"Общая длительность печати",TotalTime:"Общая длит."},m={AllJobs:"Все задачи",Cancel:"Отмена",ChangeCount:"Изменить количество",Count:"Количество",Empty:"Пусто",InvalidCountEmpty:"Ввод не должен быть пустым!",InvalidCountGreaterZero:"Ввод должен быть больше 0!",JobQueue:"Очередь задач",Jobs:"Задачи",Pause:"Пауза",RemoveFromQueue:"Удалить из очереди",Start:"Запуск"},u={ConfigFilesPanel:{AllFiles:"Все",Cancel:"Отмена",ConfigFiles:"Конфигурационные файлы",ConfigRootDirectoryDoesntExists:'Не найдена директория конфигураций. Проверьте "config_path" в секции [file_manager] конфигурации Moonraker.',Create:"Создать",CreateDirectory:"Создать директорию",CreateFile:"Создать файл",CurrentPath:"Текущий путь",Delete:"Удалить",DeleteDirectory:"Удалить директорию",DeleteDirectoryQuestion:'Удалить директорию "{name}" и всё её содержимое?',DeleteSelectedQuestion:"Удалить выбранные элементы ({count} шт.)?",Download:"Скачать",Duplicate:"Копировать",DuplicateFile:"Копировать",EditFile:"Редактировать",Empty:"Пусто",Files:"Файлы",Filesize:"Размер файла",Free:"Свободно",FreeDisk:"Свободно на диске",HiddenFiles:"Скрытые файлы",HideBackupFiles:"Скрыть файлы резервных копий",LastModified:"Последнее изменение",Name:"Имя",RefreshDirectory:"Обновить директорию",Rename:"Переименовать",RenameDirectory:"Переименовать",RenameFile:"Переименовать",Root:"Выбор директории",SetupCurrentList:"Настройки текущего списка",ShowFile:"Показать файлы",Total:"Всего",UploadFile:"Загрузить",Uploading:"Загрузка",Used:"Использовано"},EndstopPanel:{Endstop:"Концевик",EndstopInfo:"Нажмите кнопку синхронизации справа внизу, чтобы загрузить статус концевиков.",Endstops:"Концевики",open:"Не активирован",TRIGGERED:"Активирован"},LogfilesPanel:{Accept:"принять",Cancel:"отмена",Logfiles:"Файлы журналов (log-файлы)",Rollover:"Сброс log-файлов",RolloverDescription:"Выберите какие log-файлы должны быть сброшены:",RolloverToastFailed:'Сброс log-файлов "{name}": {message}',RolloverToastSuccessful:'Log-файлы "{name}" успешно сброшены.'},SystemPanel:{Constants:"Постоянные",Cpu:"Процессор",HostDetails:"Подробности хоста",LastStats:"Последний статус",Load:"Нагрузка",Memory:"Память",NoMoreInfos:"Нет больше информации",SystemLoad:"Системная информация",Values:{Awake:"Активность: {awake}",Bandwidth:"Скорость: {bandwidth}/сек",Distro:"Дистрибутив: {name} {version_id}",Frequency:"Частота: {frequency}",Load:"Нагрузка: {load}",Memory:"Память: {memory}",Os:"ОС: {os}",Received:"Получено: {received}",Temp:"Температура: {temp}°C",TempMax:"макс.: {temp}°C",TempMin:"мин.: {temp}°C",Transmitted:"Передано: {transmitted}",Version:"Версия: {version}"}},UpdatePanel:{CheckForUpdates:"Проверить обновления",Commits:"Фиксации",CommitsAvailable:"Нет доступных фиксаций | Доступна {count} фиксация | Доступно {count} фиксаций",CommitsOnDate:"фиксации в {date}",CommittedDaysAgo:"зафиксировано {days} дней назад",CommittedHoursAgo:"зафиксировано {hours} часов назад",CommittedOnDate:"зафиксировано {date}",CommittedYesterday:"зафиксировано вчера",Detached:"отдельный",Dirty:"грязный",ERROR:"ОШИБКА",Invalid:"Неисправность",OSPackages:"Пакеты ОС",PackagesCanBeUpgraded:"пакеты могут быть установлены",System:"Система",Unknown:"неизвестно",Update:"обновить",UpdateAll:"Обновить все компоненты",UpdateManager:"Менеджер обновлений",Upgrade:"установить",UpToDate:"актуально"}},D={Abort:"отказаться",Accept:"принять",Advanced:"Расширенное",Headline:"Руч. зондирование"},C={ExtruderControlPanel:{Allowed:"Доступно",EstimatedExtrusion:"Экструзия:",Extrude:"Выдавить",ExtruderTempTooLow:"Температура экструзии <",ExtrusionFactor:"Фактор экструзии (управление потоком)",ExtrusionFeedrate:"Скорость экструзии",FilamentLength:"Длина филамента",FirmwareRetractionSettings:{RetractLength:"Длина ретракта",RetractSpeed:"Скорость ретракта",UnretractExtraLength:"Длина возвр. ретракта",UnretractSpeed:"Скорость возвр. ретракта"},Headline:"Экструдер",LoadFilament:"Загрузка филамента",PressureAdvanceSettings:{Advance:"Улучшение давления",Extruder:"Экструдер",SmoothTime:"Время сглаживания"},Requested:"Запрошено",Retract:"Втянуть",TooLargeExtrusion:"Выдавливание слишком большое!",UnloadFilament:"Выгрузка филамента"},FarmPrinterPanel:{ReconnectToPrinter:"Переподключение",SwitchToPrinter:"Переключиться на принтер",WebcamOff:"Выкл."},KlippyStatePanel:{CheckKlippyAndUdsAddress:"Проверьте, что сервис Klipper запущен и klippy_uds_address правильно задан в moonraker.conf.",FirmwareRestart:"Перезапуск прошивки",MoonrakerCannotConnect:"Moonraker не может подключиться к Klipper!",PowerOn:"Включить",PrinterSwitchedOff:"Принтер выключен",PrinterSwitchedOffDescription:"Принтер сейчас выключен и Klipper не может подключиться. Включите принтер, нажав кнопку ниже:",Restart:"Перезапуск",ServiceReports:"Статус {service}"},MachineSettingsPanel:{Headline:"Настройки кинематики",MotionSettings:{Acceleration:"Ускорение",MaxAccelToDecel:"Торможение",SquareCornerVelocity:"Скорость на прямых углах",Velocity:"Скорость"}},MacrosPanel:{Headline:"Макросы",Send:"отправить"},MiniconsolePanel:{Headline:"Консоль",HideTemperatures:"Скрыть температуры",HideTimelapse:"Скрыть таймлапсы",SendCode:"Команда...",SetupConsole:"Настройки консоли"},MinSettingsPanel:{IncludeMainsailCfg:"Убедитесь, что включили mainsail.cfg в файл printer.cfg.",IsNotDefinedInConfig:"не задано в конфигурации.",MissingConfiguration:"Не найдена конфигурация",MoreInformation:"больше информации"},MiscellaneousPanel:{Headline:"Разное",Light:{Blue:"синий",Green:"зелёный",Red:"красный",White:"белый"},RunoutSensor:{Detected:"присутствует",Disabled:"отсутствует",Empty:"Пусто"}},PowerControlPanel:{Error:"Ошибка",Off:"Выкл.",On:"Вкл.",PowerControl:"Управление питанием"},StatusPanel:{CancelPrint:"Отмена печати",ClearPrintStats:"Очистить статистику печати",Difference:"Разница",EmptyGcodes:"Нет файлов G-кода.",EmptyJobqueue:"Нет файлов в очереди печати.",Estimate:"Осталось",ETA:"Завершение",ExcludeObject:{Cancel:"отмена",Excluded:"Исключено",ExcludeObject:"Исключить деталь",ExcludeObjectHeadline:"Исключение деталей",ExcludeObjectText:'Исключить деталь "{name}"?'},Filament:"Филамент",File:"Файл",Files:"Файлы",Flow:"Поток",Headline:"Статус",Jobqueue:"Очередь",JobqueueMoreFiles:"Нет больше задач | Еще одна задача | Еще {count} задач(и)",Layer:"Слой",Max:"макс.",ObjectHeight:"Высота детали",PauseAtLayer:{Abort:"отказаться",Accept:"принять",AtLayer:"На слое",Call:"Вызвать",DescriptionPauseAtLayerActive:'Эта функция уже активна и будет вызвана "{call}" на слое {layer}. Если вы вызовите конманду снова, эти настройки будут перезаписаны.',DescriptionPauseNextLayerActive:'Эта функция уже активна и будет вызвана  "{call}" на следующем слое.',Layer:"Слой",NextLayer:"На след. слое",PauseAtLayer:"Пауза на слое",Type:"Вариант"},PausePrint:"Пауза печати",Print:"Печать",PrintTime:"Длит. печати",ReprintJob:"Перепечатать задачу",Requested:"Запрошено",ResumePrint:"Продолжить печать",Slicer:"Слайсер",Speed:"Скорость",Status:"Статус",Total:"Прошло",Unknown:"Неизвестно"},TemperaturePanel:{AutoscaleChart:"Автомасштабирование графика",Avg:"Средняя",Cooldown:"Выкл. нагрев",Current:"Текущая",Dataset:{Power:"мощность-ШИМ",Speed:"скорость-ШИМ",Target:"заданную температуру",Temperature:"текущую температуру"},Headline:"Температуры",Max:"Макс.",Min:"Мин.",Name:"Название",Presets:"Профили",SetupTemperatures:"Установка температур",ShowChart:"Показывать график",ShowNameInChart:"Показывать {name} на графике",ShowNameInList:"Показывать {name} в списке",State:"Мощность",Target:"Заданная",TemperaturesInChart:"Температура [°C]",TempTooHigh:"Температура слишком высокая для {name}! (макс.: {max})",TempTooLow:"Температура слишком низкая для {name}! (мин.: {min})"},ToolheadControlPanel:{Absolute:"абсолютная",ALL:"Все",Headline:"Головка принтера",PleaseConfigureSteps:"Сконфигурируйте шаги",Position:"Позиция",QGL:"QGL",Relative:"относительная",SettingsInterfaceControl:"Настройки > Интерфейс > Управление",SpeedFactor:"Фактор скорости (скорость подачи)",ZTilt:"Z-наклон"},WebcamPanel:{All:"Все",FPS:"к/сек",Headline:"Видеокамера",NoWebcam:'Нет видеокамер. Добавьте видеокамеру через "Настройки интерфейса" -> "Видеокамеры".',UnknownWebcamService:"Неизвестный сервис видеокамеры"},ZoffsetPanel:{Clear:"Очистить",Headline:"Z-смещение",Later:"Позже",Ok:"Хорошо",Save:"Сохранить",SaveConfig:"СОХРАНИТЬ КОНФИГУРАЦИЮ",SaveInfoDescription:'Новое Z-смещение было вычисленно и зарегистрированно. Нажмите "СОХРАНИТЬ КОНФИГУРАЦИЮ" для сохранения в printer.cfg и перезапуска Klipper.',SaveInfoDescriptionPrint:'Новое Z-смещение было вычисленно и зарегистрированно. После печати, нажмите "СОХРАНИТЬ КОНФИГУРАЦИЮ" в верхней части экрана, для сохранения в printer.cfg и перезапуска Klipper.',SaveInfoHeadline:"Информация",ToEndstop:"до концевика",ToProbe:"до датчика"}},S={AreYouSure:"Подтвердите действие",No:"Нет",TurnDeviceOff:"Выключить {device}",TurnDeviceOn:"Включить {device}",Yes:"Да"},g={Console:"Консоль",Dashboard:"Управление","G-Code Files":"Файлы G-кода","G-Code Viewer":"Просм. G-кода",Heightmap:"Карта стола",History:"История",Machine:"Настройка",Printers:"Принтеры",Timelapse:"Таймлапсы",Webcam:"Видеокамеры"},T={Accept:"Принять",Base:"База",ErrorText:"Что-то пошло не так в процессе зондирования.",Headline:"Регулировка винтов наклона"},P={AddPrinter:"Добавить принтер",AddPrintersToJson:"Добавьте принтеры в config.json.",CannotConnectTo:"Не получается подключиться к {host}.",ChangePrinter:"Сменить принтер",Connecting:"Подключение к {host}",ConnectionFailed:"Подключение сорвалось",EditPrinter:"Редактировать принтер",Hello:"Привет и добро пожаловать в дистанционный режим Mainsail!",HostnameInvalid:"Неправильное имя хоста / IP",HostnameIp:"Имя хоста / IP",HostnameRequired:"Требуется указать имя хоста",Port:"Порт",PortRequired:"Требуется указать порт",RememberToAdd:"Не забудьте добавить '{cors}' в moonraker.conf в 'cors_domains'.",SelectPrinter:"Выбрать принтер",TryAgain:"Попробовать снова",UpdatePrinter:"Обновить принтер",YouCanFindMore:"Вы найдёте больше информации в"},y={Cancel:"Отмена",Close:"Закрыть",ConsoleTab:{AddFilter:"добавить фильтр",Console:"Консоль",CreateHeadline:"Создать фильтр",Direction:"Порядок отображения",DirectionShell:"Последняя запись снизу",DirectionTable:"Последняя запись сверху",EditHeadline:"Редактировать фильтр",EntryStyle:"Вид отображения",EntryStyleCompact:"Компактный",EntryStyleDefault:"По умолчанию",Filters:"Фильтры",Height:"Высота",HideTemperatures:"Скрыть температуры",HideTimelapse:"Скрыть таймлапсы",Name:"Название",Regex:"Выражение (Regex)",StoreButton:"Сохранить фильтр",UpdateButton:"Обновить фильтр"},ControlTab:{Bars:"Стопка",Circle:"Круг",Control:"Установки",Cross:"Крест",EnableXYHoming:"Начальное выравнивание одновременно по осям X и Y",EstimatedExtrusionInfo:"Показать информацию о предполагаемой экструзии",EstimatedExtrusionInfoDescription:"Показать / скрыть информацию о предполагаемой экструзии, основаной на выбранной длине филамента и скорости экструзии",InvertXMovement:"Инверсия перемещения по оси X",InvertYMovement:"Инверсия перемещения по оси Y",InvertZMovement:"Инверсия перемещения по оси Z",IsDefault:" (по умолчанию)",MaximumValues:"Максимальное значение: {maximum}",MaximumValuesVisibility:"Рекомендуется максимальное значение {maximum} для лучшей видимости",MinimumValues:"Минимальное значение: {minimum}",MotorsOff:"Шаговые моторы выкл.{isDefault}",MoveDistancesEInMm:"Инкремент экструзии (в мм)",MoveDistancesInMm:"Инкремент перемещения (в мм)",MoveDistancesXYInMm:"Инкремент перемещения по осям X и Y (в мм)",MoveDistancesZInMm:"Инкремент перемещения по оси Z (в мм)",QuadGantryLevel:"Четырех-позиционный портал{isDefault}",SpeedEInMms:"Предустановка скорости экструзии (в мм/сек)",SpeedXY:"Скорость перемещения по осям X и Y",SpeedZ:"Скорость перемещения по оси Z",Style:"Стиль отображения",ValueGreaterThan:"Значение должно быть больше {value}",ZOffsetIncrements:"Инкремент Z-смещения (в мм)",ZTiltAdjust:"Регулировка Z-наклона{isDefault}"},DashboardTab:{Dashboard:"Управление",Desktop:"Рабочий стол",Mobile:"Смартфон",ResetLayout:"Сбросить расположение",Tablet:"Планшет",Widescreen:"Широкий экран"},Edit:"Редактор",EditorTab:{ConfirmUnsavedChanges:"Подтверждать сохранение или отмену внесенных изменений",ConfirmUnsavedChangesDescription:"Если включено, редактору требуется подтверждение на сохранение или отмену внесенных изменений. Если выключено, изменения будут отменены без уведомления.",Editor:"Редактор",KlipperRestartMethod:"Способ перезапуска Klipper",KlipperRestartMethodDescription:"Выберите какой способ перезапуска Klipper будет использоваться, после нажатия 'СОХРАНИТЬ И ПЕРЕЗАПУСТИТЬ' при редактировании конфигурационных файлов Klipper.",Spaces:"{count} пробела",TabSize:"Размер табуляции",TabSizeDescription:"Настройка количества пробелов для табуляции клавишей TAB",UseEscToClose:"Использование клавиши ESC",UseEscToCloseDescription:"Позволяет использовать клавишу ESC для закрытия редактора"},GCodeViewerTab:{BackgroundColor:"Цвет фона",ExtruderColor:"Цвет экструдера",GCodeViewer:"Просм. G-кода",GridColor:"Цвет сетки",MaxFeed:"Максимальная скорость подачи",MinFeed:"Минимальная скорость подачи",ProgressColor:"Цвет прогресса",ShowAxes:"Показывать оси"},GeneralTab:{"12hours":"12-часовой ({time})","24hours":"24-часовой ({time})",Backup:"Резервирование",BackupDialog:"Выберите категории, которые хотите резервировать:",CalcEstimateTime:"Расчёт оставшегося времени",CalcEstimateTimeDescription:"Если выбрано несколько, расчётными будут усреднённые данные",CalcEtaTime:"Расчёт времени завершения",CalcEtaTimeDescription:"Если выбрано несколько, расчётными будут усреднённые данные",CalcPrintProgress:"Расчёт прогресса печати",CalcPrintProgressDescription:"Способ расчёта прогресса печати.",CalcPrintProgressItems:{Filament:"Филамент",FileAbsolute:"Позиция в файле (абсолютная)",FileRelative:"Позиция в файле (относительная)",Slicer:"Слайсер (M73)"},CannotReadJson:"Не получается прочитать/распознать файл резервирования.",DateFormat:"Формат даты",DbConsoleHistory:"История консоли",DbHistoryJobs:"История задач",DbHistoryTotals:"History Totals",DbTimelapseSettings:"Настройки таймлапсов",DbView:"Просмотр настроек",DbWebcams:"Видеокамеры",EstimateValues:{Filament:"Филамент",File:"Файл",Slicer:"Слайсер"},FactoryDialog:"Выберите категории, которые хотите сбросить:",FactoryReset:"Полный сброс",General:"Главное",Language:"Язык",MoonrakerDb:"База данных Moonraker",PrinterName:"Название принтера",Reset:"Сброс",Restore:"Восстановление",RestoreDialog:"Выберите категории, которые хотите восстановить:",TimeFormat:"Формат времени"},InterfaceSettings:"Настройки интерфейса",MacrosTab:{Add:"Добавить",AddGroup:"Добавить группу",AvailableMacros:"Доступные макросы",ChangeMacroColor:"Изменить цвет кнопок.",Color:"Цвет",CountMacros:"Нет макросов | {count} макрос | {count} макросов",Custom:"Пользовательский",CustomColor:"Выбранный цвет",DeletedMacro:"Удаленный макрос",DeleteMacroFromGroup:"Удалить макрос из группы.",EditGroup:"Редактирование группы",Error:"Ошибочный",Expert:"Продвинутое",General:"Главное",Group:"Группа",GroupMacros:"Группы макросов",Macrogroups:"Группы",Macros:"Макросы",Management:"Управление макросами",Name:"Название",NoAvailableMacros:"Нет доступных макросов.",NoGroups:"Нет групп...",NOMacros:"Нет макросов...",NoMacrosInGroup:"Нет макросов в этой группе.",Primary:"Основной",Secondary:"Второстепенный",ShowInStatePaused:"Показать / скрыть если принтер на паузе.",ShowInStatePrinting:"Показать / скрыть если принтер печатает.",ShowInStateStandby:"Показать / скрыть если принтер в ожидании.",Simple:"Простое",Status:"Статус",Success:"Успешный",UnknownGroup:"Без названия",Warning:"Предупредительный"},MiscellaneousTab:{AddGroup:"Добавить группу",AddPreset:"Добавить профиль",Color:"Цвет",CreateGroup:"Создать группу",CreatePreset:"Создать профиль",End:"Конечный",EndDescription:"Последний LED в этой группе.",Groups:"Группы",GroupSubTitle:"Начальный: {start}, конечный: {end}",LightGroups:"{name} - Группы",LightPresets:"{name} - Профили",Miscellaneous:"Разное",Name:"Название",NoDevicesFound:"Нет устройств",NoGroupFound:"Нет групп",NoPresetFound:"Нет профилей",Presets:"Профили",Start:"Начальный",StartDescription:"Первый LED в этой группе.",UnableToLoadLight:"Невозможно загрузить свет",UnableToLoadPreset:"Невозможно загрузить профиль"},NavigationTab:{Navigation:"Навигация"},PresetsTab:{AddPreset:"Добавить профиль",Cooldown:"Выкл. нагрева",CreateHeadline:"Создать профиль",CustomGCode:"Пользовательский G-код",EditCooldown:"Редактировать выкл. нагрева",EditHeadline:"Редактировать профиль",ErrorInvalidValue:"Неправильное значение",ErrorNameNotUnique:"Название уже существует",ErrorNameRequired:"Необходимо название",Name:"Название",PreheatPresets:"Профили",PresetInfo:"Установите заданную температуру или пользовательский G-код.",PresetNamePlaceholder:"Название профиля",StoreButton:"Сохранить профиль",UpdateButton:"Обновить профиль",UpdateCooldown:"Обновить выкл. нагрева"},RemotePrintersTab:{AddPrinter:"Добавить принтер",EditPrinter:"Редактировать принтер",Hostname:"Имя хоста",Port:"Порт",RemotePrinters:"Принтеры",UpdatePrinter:"Обновить принтер",UseConfigJson:"InstanceDB = JSON определён. Используйте config.json для редактирования списка принтеров."},Store:"Сохранение",TimelapseTab:{Autorender:"Авторендер",AutorenderDescription:"Если включено, таймлапс-видео будет автоматически рендериться по окончании печати",Camera:"Видеокамера",CameraDescription:"Выберите какая видеокамера будет использоваться",ConstantRateFactor:"Постоянная составляющая",ConstantRateFactorDescription:"Конфигурируется качество по отношению к размеру видеофайла. Диапазон 0–51, где 0 без потери качества, 23 по умолчанию и 51 возможно потеря качества. Низкое значение имеет высокое качество. Выбор 17 или 18 выглядит без потери качества.",duplicatelastframe:"Копировать последний кадр",duplicatelastframeDescription:"Копировать последний кадр в конце видео",Enabled:"Включено",EnabledDescription:"Если выключено, макрос G-кода будет игнорироваться и авторендер будет пропущен.",Extraoutputparams:"Дополнительные параметры вывода",ExtraoutputparamsDescription:"Задаёт дополнительные выходные параметры для FFMPEG. Примечание: указание чего либо здесь, выключает установки поворота",FwRetract:"FW-ретракт",FwRetractDescription:"Использовать прошивочный ретракт в таймлапс-макросе",GcodeVerbose:"Отображаемый G-код",GcodeVerboseDescription:"Если включено, макрос G-кода будет транслироваться в консоль",General:"Главное",HyperlapseCycle:"Время цикла гиперлапса",HyperlapseCycleDescription:"Снимок будет сделан каждые X секунд",Mode:"Режим",ModeDescription:"Выберите между режимом макрослоя и гиперлапса (по времени)",OutputFramerate:"Выходное количество кадров в секунду",OutputFramerateDescription:"Задаёт количество кадров в секунду для видео. Примечание: это будет проигнорировано, если включено variable_fps",Parkhead:"Парковка головки принтера",ParkheadDescription:"Если включено, головки принтера будет парковаться перед съемкой кадра.",Parkpos:"Позиция парковки",ParkposDescription:"Выбор позиции парковки",ParkTime:"Длительность парковки",ParkTimeDescription:"Добавить дополнительное время ожидания при парковке.",Pixelformat:"Формат пикселей",PixelformatDescription:"Задание пиксельного формата для выходного видеофайла",PosDZ:"Позиция Z",PosDZDescription:"Позиция парковки Z (относительная)",PosX:"Позиция X",PosXDescription:"Позиция парковки X (абсолютная)",PosY:"Позиция Y",PosYDescription:"Позиция парковки Y (абсолютная)",PreviewImage:"Картинка предпросмотра",PreviewImageDescription:"Сохранять картинку предпросмотра с таким же названием, как название видеофайла",RenderingOptions:"Опции рендеринга",RetractDistance:"Расстояние ретракта",RetractDistanceDescription:"Длина филамента, которую экструдер втянет.",RetractSpeed:"Скорость ретракта",RetractSpeedDescription:"Скорость с которой экструдер будет делать ретракт филамента (втягивание).",SaveFrames:"Сохранение кадров",SaveFramesDescription:"Сохранять кадры в zip-архив для внешнего рендеринга",StreamDelayCompensation:"Компенсация задержки видеопотока",StreamDelayCompensationDescription:"Задержка захвата кадров",Targetlength:"Заданная длина",TargetlengthDescription:"Заданная длина когда включено переменное количество кадров в секунду",TimeFormatCode:"Формат таймкода",TimeFormatCodeDescription:"Задает как кодируется таймкод в выходном видеофайле",Timelapse:"Таймлапс",TravelSpeed:"Скорость перемещения",TravelSpeedDescription:"Скорость перемещения в парковочную позицию и обратно",UnretractDistance:"Длина возврврата ретракта",UnretractDistanceDescription:"Длина филамента, которую экструдер выдавит после ретракта (втягивания).",UnretractSpeed:"Скорость возврврата ретракта",UnretractSpeedDescription:"Скорость с которой экструдер будет делать возврврат ретракта после ретракта (втягивания).",VariableFps:"Переменное количество кадров в секунду",VariableFpsDescription:"Если включено, количество кадров в секунду выходного видеофайла будет рассчитываться на основе заданной длины",VariableFpsMax:"Макс. переменный к/сек",VariableFpsMaxDescription:"",VariableFpsMin:"Мин. переменный к/сек",VariableFpsMinDescription:""},UiSettingsTab:{BedScrewsDialog:"Диалог регулировки винтов стола",BedScrewsDialogDescription:"Показывать диалог помощника для BED_SCREWS_ADJUST.",BoolBigThumbnail:"Большие миниатюры",BoolBigThumbnailDescription:"Показывать большие миниатюры в панели состояния при печати.",BoolHideUploadAndPrintButton:'Скрыть кнопку "ЗАГРУЗИТЬ И НАПЕЧАТАТЬ"',BoolHideUploadAndPrintButtonDescription:'Показывать или скрыть кнопку "ЗАГРУЗИТЬ И НАПЕЧАТАТЬ" в верхней части.',ConfirmOnEmergencyStop:"Требовать подтверждение аварийной остановки",ConfirmOnEmergencyStopDescription:"Показывать диалог подтверждения аварийной остановки",ConfirmOnPowerDeviceChange:"Требовать подтверждения изменения питания устройства",ConfirmOnPowerDeviceChangeDescription:"Показывать диалог подтверждения изменения питания устройства",DisableFanAnimation:"Отключить анимацию вентиляторов",DisableFanAnimationDescription:"Это немного снижает нагрузку в браузере.",DisplayCANCEL_PRINT:"Показывать CANCEL_PRINT",DisplayCANCEL_PRINTDescription:"Показывать постоянно кнопку CANCEL_PRINT - при нажатии, никакого подтверждения действия не будет.",GcodeThumbnails:"Миниатюры G-кодов",GcodeThumbnailsDescription:"Нажмите кнопку для получения инструкции.",Guide:"Инструкция",HideSaveConfigButtonForBedMesh:"Скрыть кнопку СОХРАНИТЬ КОНФИГУРАЦИЮ при изменении сетки стола (bed_mesh)",HideSaveConfigButtonForBedMeshDescription:"Скрыть СОХРАНИТЬ КОНФИГУРАЦИЮ, если зарегистрировано толко сохранение сетки стола в Klipper.",LockSliders:"Блокировать переключатели на устройствах с сенсорным экраном",LockSlidersDelay:"Задержка блокировки переключателей",LockSlidersDelayDescription:"Переключатели будут заблокированы после указанной задержки. Если установлено 0 или не задано вообще, переключатели блокируются только при смене или обновлении страницы.",LockSlidersDescription:"Переключатели на сенсорном экране должны быть разблокированы перед изменением.",Logo:"Цвет логотипа",ManualProbeDialog:"Диалог помощника ручной калибровки",ManualProbeDialogDescription:"Показывать диалог помощника для PROBE_CALIBRATE или Z_ENDSTOP_CALIBRATE.",NavigationStyle:"Стиль навигации",NavigationStyleDescription:"Смена внешнего вида навигационной панели",NavigationStyleIconsAndText:"Иконки + текст",NavigationStyleIconsOnly:"Только иконки",PowerDeviceName:"Устройство питания принтера",PowerDeviceNameDescription:"Выберите как Moonraker будет использовать устройство питания принтера.",Primary:"Основной цвет",ScrewsTiltAdjustDialog:"Диалог регулировки винтов наклона стола",ScrewsTiltAdjustDialogDescription:"Показывать диалог помощника для SCREWS_TILT_CALCULATE.",TempchartHeight:"Высота графика температуры",TempchartHeightDescription:"Изменение высоты графика температуры на странице управления.",UiSettings:"Внешний вид"},Update:"обновить",WebcamsTab:{AddWebcam:"добавить видеокамеру",CreateWebcam:"Создать видеокамеру",EditCrowsnestConf:"Редактировать crowsnest.conf",EditWebcam:"Редактировать видеокамеру",FlipWebcam:"Отразить картинку видеокамеры:",Hlsstream:"HLS Stream",Horizontally:"горизонтально",IconBed:"Стол",IconCam:"Камера",IconDoor:"Дверь",IconFilament:"Филамент",IconHot:"Горячий",IconMcu:"Контроллер",IconNozzle:"Сопло",IconPrinter:"Принтер",Ipstream:"IP-камера",JMuxerStream:"Сырой h264 поток (jmuxer)",Mjpegstreamer:"MJPEG-поток",MjpegstreamerAdaptive:"Адаптивный MJPEG-поток",Name:"Название",NameAlreadyExists:"Название уже существует",Required:"требуется",Rotate:"Поворот",SaveWebcam:"Сохранить видеокамеру",Service:"Сервис",TargetFPS:"Заданные к/сек",UpdateWebcam:"Обновить видеокамеру",UrlSnapshot:"URL фото",UrlStream:"URL потока",Uv4lMjpeg:"UV4L-MJPEG",Vertically:"вертикально",Webcams:"Видеокамеры",WebrtcCameraStreamer:"WebRTC (camera-streamer)",WebrtcJanus:"WebRTC (janus-gateway)"}},F={AllFiles:"Все",Autorender:"Авто-рендер",Cancel:" Отмена",Create:"Создать",CreateNewDirectory:"Создать",CurrentPath:"Текущий путь",Delete:"Удалить",DeleteDirectory:"Удалить",DeleteDirectoryQuestion:'Удалить директорию "{name}" и всё её содержимое?',DeleteSelectedQuestion:"Удалить выбранные файлы ({count} шт.)?",Download:"Скачать",DuplicateLastframe:"Копировать последний кадр",Empty:"Нет законченных таймлапсов.",Enabled:"Включено",EstimatedLength:"Предполагаемая длина",Files:"Файлы",Filesize:"Размер файла",Fixed:"фиксированый",Framerate:"Кадров в секунду",Frames:"Кадров",Free:"Свободно",FreeDisk:"Свободно на диске",LastModified:"Посл. изменение",MaxFramerate:"Макс. кадров в сек.",MinFramerate:"Мин. кадров в сек.",Name:"Название",NewDirectory:"Новая директория",NoActiveTimelapse:"Нет записей.",Preview:"Предпросмотр",RefreshCurrentDirectory:"обновить директорию",Rename:"Переименовать",RenameDirectory:"Переименовать директорию",RenameFile:"Переименовать файл",Render:"Рендер",RenderSettings:"Настройки рендера",SaveFrames:"Сохранить кадры",Search:"Поиск...",StartRender:"начать рендер",Status:"Статус",TargetFps:"Заданные к/сек",Targetlength:"Заданная длина",TimelapseFiles:"Файлы таймлапсов",TimelapseRendering:"Рендеринг таймлапса",TimelapseRenderingSuccessful:"Рендеринг таймлапса успешно завершён",Total:"Всего",Type:"Тип",Used:"Использовано",Variable:"Переменная",Video:"Видео"},h="Русский",E={App:e,BedScrews:t,ConnectionDialog:i,Console:r,Dialogs:a,Editor:o,EmergencyStopDialog:n,Files:s,FullscreenUpload:l,GCodeViewer:c,Heightmap:d,History:p,JobQueue:m,Machine:u,ManualProbe:D,Panels:C,PowerDeviceChangeDialog:S,Router:g,ScrewsTiltAdjust:T,SelectPrinterDialog:P,Settings:y,Timelapse:F,title:h};export{e as App,t as BedScrews,i as ConnectionDialog,r as Console,a as Dialogs,o as Editor,n as EmergencyStopDialog,s as Files,l as FullscreenUpload,c as GCodeViewer,d as Heightmap,p as History,m as JobQueue,u as Machine,D as ManualProbe,C as Panels,S as PowerDeviceChangeDialog,g as Router,T as ScrewsTiltAdjust,P as SelectPrinterDialog,y as Settings,F as Timelapse,E as default,h as title};
