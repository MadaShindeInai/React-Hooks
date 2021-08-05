Based on https://overreacted.io/a-complete-guide-to-useeffect/ . If you still got questions - check a link to get answers.  

Lecture Text:
Меня зовут Сергей. Сегодня мой дебют в роли лектора. Т.к. тема объёмная и сложная, а у меня с вами сегодня первый раз, заранее прошу прощения за заминки. Материал и примеры уже написаны мной заранее, я буду только менять закомментированный код и прыгать по веткам. Код будет доступен после лекции, текст лекции тоже. И запись должна быть. Если я буду с чем-то подвисать - в это время можете писать свои вопросы.
Этим замечательным пятничным вечером мы не будем с вами вместе читать документацию (я думаю вы прекрасно умеете читать и сами) , а будем рассматривать конкретным примеры. Попытаемся немножко понять отличия функционального подхода от классового, и повторим основные вещи, которые вызывают ошибки. Насладимся легкостью и логичностью хуков.

1) useState 
Наверное самый простой хук, механика которого понятна, однако понимание того, как он работает приходит со временем. В аргументы хука мы кладём дефолтное значение. Хук возвращает нам константу с этим значением и функцию для ее перезаписи. Подробнее вы можете почитать в документации. 

В отличие от метода setState, который вы можете найти в классовых компонентах, useState не объединяет объекты обновления автоматически. (Тут пример). 

Вы можете повторить это поведение, используя спред оператор. О таких вещах также предупреждает тайпскрипт (очень рекомендую его использование вместо  Js. Помогает избежать многих ошибок, контролировать приложение, а со временем начинает буквально писать код за вас. На ютьюбе достаточно много роликов занимающих часа 2-3 где подробно рассказывается об интеграции тайпскрипта в реакт).Ну а вообще, во избежание таких ситуаций можно написать свой отдельный useState для каждого значения объекта или использовать  useReducer (нет).

Что хотелось бы дополнительно отметить (на примере счетчика ).
Нас интересует строка <p>Counter value: {count}</p>
В нашем примере count — это просто число. Это не «привязка данных», не «объект-наблюдатель» или что угодно другое. Перед нами —  число, вроде этого const count = 43;

React вызывает компонент всякий раз, когда мы обновляем состояние. В результате каждая операция рендеринга «видит» собственное значение состояния counter, которое, внутри функции, является константой. В результате нет никакой магии, строка просто встраивает числовое значение в код, формируемый при рендеринге. Это число предоставляется средствами React. 
Главный вывод, который можно из этого сделать, заключается в том, что count является константой внутри любого конкретного рендера и со временем не меняется. Т.е. меняется компонент, который вызывается снова и снова. Каждый рендер «видит» собственное значение count, которое оказывается изолированным и неизменным для каждой из операций рендеринга.
(Далее пример с setTimeout). 
Также неизменными для каждого рендера остаются и обработчики событий. По сути, в каждом рендере мы используем свою функцию, в которой лежит свой count. Внутри каждого конкретного рендера свойства и состояние всегда остаются одними и теми же. То же самое происходит и с любыми механизмами, использующими их (включая обработчики событий). Они тоже «принадлежат» конкретным рендерам. Поэтому даже асинхронные функции внутри обработчиков событий будут «видеть» те же самые значения count.

Для оптимизации реакт иногда объединяет изменения стэйта в один, в результате чего использовав синтаксис такого рода мы можем получить неожиданный результат. (пример под компонентом)

2) useEffect
