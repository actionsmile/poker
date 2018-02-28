# Clean React Typescript app
[![supported by Scriptor](https://img.shields.io/badge/supports%20by-Scriptor-orange.svg?colorB=e74c3c)](https://www.scriptor.me) [![Travis CI Build Status](https://img.shields.io/travis/actionsmile/poker.svg)](https://travis-ci.org/actionsmile/poker) [![CircleCI](https://circleci.com/gh/actionsmile/poker/tree/master.svg?style=svg)](https://circleci.com/gh/actionsmile/poker/tree/master)

[![Made with Bulma](https://www.scriptor.me/badges/bulma.png)](https://bulma.io)

:beers: Этот проект в конечном виде своем будет представлять из себя веб-приложение для «Покер-планирования». Зайдя на сайт можно либо создать сессию, либо присоединиться к ней.

## Создание сессии
После того, как пользователь зайдет на сатй, ему будет предложено либо ввести уникальный код, либо сгенерировать его. Генерация кода и есть создание сессии. Создатель сессии не учавствует в процессе планирования. Он ее хостит. То есть отображает карты участников сессии.

## Подключение к сессие
Подключившися по уникальному коду, пользователь становится участником планирования. Ему становятся доступны карты для планирования спринта (числа Фибоначи + служебки). После того, как все участники выложат свои оценки (или по решению хоста сессии) карты вскрываются. Более подробнео про покер-планирование можно почитать в [википедии](https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D0%B5%D1%80_%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
