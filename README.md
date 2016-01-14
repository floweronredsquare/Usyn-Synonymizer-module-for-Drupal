# Usyn Synonymizer module

for Drupal core: 7.x

## ENGLISH


Allows to make unique your content by substitution of synonyms.


### Installation

1. Put the catalog usyn_synonymizer into /sites/all/modules of the root of your site.

2. Turn on the module on the page http://example.com/admin/modules.


### Upload of new synonyms base

If you work with Usyn Synonymizer the first time you need to upload a base of synonyms in CSV format. The examples of english and russin bases of synonyms you can find in usyn_synonymizer/bases.

1. If the base of synonyms already exists in your system, you need to clean it on the page http://example.com/clean-db

2. You can upload a new base of synonyms on the page http://example.com/admin/config/usyn_synonymizer/settings

3. You need click the "Import" button on the next page after uploading CSV file.


### How to make you content unique

1. Create a new node in the usual way and fill the field "Body" in any text.

2. In edit mode, click the Usyn tab.

3. Input stopwords separated by commas or leave this field empty and click the "Synonymize!" button.

4. On the next page in the Result field you can choose another synonyms.

5. Click "Save results" button.  


## RUSSIAN


Модуль позволяет уникализировать контент сайта путем подстановки синонимов.


### Установка

1. Положить папку usyn_synonymizer в каталог /sites/all/modules сайта.

2. Включить модуль на странице http://example.com/admin/modules.


### Загрузка новой базы синонимов

Если вы работаете с синонимайзером в первый раз, то необходимо загрузить базу синонимов в формате csv. Примеры английской и русской базы синонимов вы можете найти в каталоге usyn_synonymizer/bases.

1. Если база синонимов уже ранее была загружена, то необходимо очистить ее на странице http://example.com/clean-db

2. Загрузить новую базу синонимов можно на странице http://example.com/admin/config/usyn_synonymizer/settings

3. После загрузки CSV файла вам потребуется осуществить импорт базы в систему. Для этого нажмите кнопку "Import" на странице, на которую вы попадете после загрузки файла с базой синонимов.


### Уникализация контента

1. Создайте новую ноду обычным способом и заполните поле "Body" любым текстом.

2. В режиме редактирования перейдите на вкладку Usyn.

3. Введите через запятую стоп-слова или оставьте это поле пустым и нажмите "Уникализировать".

4. На следующей странице в поле Result вы можете подобрать другие синонимы.

5. Нажмите "Сохранить результат".


