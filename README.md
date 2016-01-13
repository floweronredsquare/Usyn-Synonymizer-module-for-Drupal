# Usyn Synonymizer module

for Drupal core: 7.x

## ENGLISH


Allows to make unique your content by substitution of synonyms.


### Installation

1. ol Put the catalog usyn_synonymizer into /sites/all/modules of the root of your site.

2. ol Turn on the module on the page http://<your_site>/admin/modules.


### Upload of new synonyms base

If you work with Usyn Synonymizer the first time you need to upload a base of synonyms in CSV format. The examples of english and russin bases of synonyms you can find in usyn_synonymizer/bases.

1. ol If the base of synonyms already exists in your system, you need to clean it on the page http://<your_site>/clean-db

2. ol You can upload a new base of synonyms on the page http://<your_site>/admin/config/usyn_synonymizer/settings


### How to make you content unique

1. ol Create a new node in the usual way and fill the field "Body" in any text.

2. ol In edit mode, click the Usyn tab.

3. ol Input stopwords separated by commas or leave this field empty and click submit button.

4. ol On the next page in the Result field you can choose another synonyms.

5. ol Click submit button.  


## RUSSIAN


Модуль позволяет уникализировать контент сайта путем подстановки синонимов.


### Установка

1. ol Положить папку usyn_synonymizer в каталог /sites/all/modules сайта.

2. ol Включить модуль на странице http://<your_site>/admin/modules.


### Загрузка новой базы синонимов

Если вы работаете с синонимайзером в первый раз, то необходимо загрузить базу синонимов в формате csv. Примеры английской и русской базы синонимов вы можете найти в каталоге usyn_synonymizer/bases.

1. ol Если база синонимов уже ранее была загружена, то необходимо очистить ее на странице http://<your_site>/clean-db

2. ol Загрузить новую базу синонимов можно на странице http://<your_site>/admin/config/usyn_synonymizer/settings


### Уникализация контента

1. ol Создайте новую ноду обычным способом и заполните поле "Body" любым текстом.

2. ol В режиме редактирования перейдите на вкладку Usyn.

3. ol Введите через запятую стоп-слова или оставьте это поле пустым и нажмите "Уникализировать".

4. ol На следующей странице в поле Result вы можете подобрать другие синонимы.

5. ol Нажмите "Сохранить результат".


