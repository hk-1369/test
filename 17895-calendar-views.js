   4   ¹   ]ºç¿s¹                  x   ¹   !   #                                      chrome://calendar/content/calendar-views.js     hg         	                               	   
                                             ;    5   ¸   
=   : ;    5   ¸   
=   : ;    5   ¸   
=   : ;    5   ¸   
=   : ;    5   ¸   
=   : n   Y       ]   	   ]   
   ]      ]   o   Q;   Q;   Qn   Y   ;   ¸   
Z  ;    5   5   `   : ]   	   ]      ]      ]   Y   ]      ]   o   Qn   ;   D   QY   o   Q;   Y      ]   6   n   Y   @]      ]      ]   @]    o   QÊ  ª	 	 	 	Ê &	 [	 o	 Ê Ï	 ù	  	 	 $	 5	 H	 S	 a	 n	 x	  ÁÚDÚIÚ?ÚAÚBÊÊÊ.Ê[Ð  ª  ý    & T [ f o  ÊÐ'ÓÿÿÿéÈÊ ©Ê ®Ê ·ÊÐ  Ï ñ ù      $ 0 5 A H S \ a i n s x ÛÊÐ ¼ ÁÊÊÊ ÍÌ Á    Components   utils   importQ   resource://calendar/modules/calUtils.jsm[   resource://calendar/modules/calAlarmUtils.jsmG   resource://gre/modules/Services.jsmK   resource://gre/modules/XPCOMUtils.jsmM   resource://gre/modules/Preferences.jsm-   calendarViewController   QueryInterface   createNewEvent!   modifyOccurrence#   deleteOccurrences   gMidnightTimer%   categoryPrefBranch%   categoryManagement   XPCOMUtils   generateQI   interfaces   nsIObserver   initCategories#   cleanupCategories   observe%   categoryStyleCache7   updateStyleSheetForCategory   cal   navigationBar   setDateRange   timeIndicator   timer   start   cancel   lastView   ÿÿÿÿ   K   calendarViewController.QueryInterfaceÁ                 X       ¹                                           	   aIID ¥                 T  ¸    
;   5   5   :  E   #QT  ¸    
;   5   5   :     ;   5   5   pAÙÊÙÐ    equals   Components   interfaces5   calICalendarViewController   nsISupports   results+   NS_ERROR_NO_INTERFACE   ÿÿÿÿ   K   calendarViewController.createNewEventÁ                È       ¹      *                                      aCalendar   aStartTime   aEndTime   aForceAllday      6         	      T E   'QT E   QT 5     E   QT 5           Q;   ¸   
:     Q;   â   V   T  T T : QV   ;   â   =   =   : 6   Q;   â   =   	V   V   5   @@: QÈ   ;   
â   
T  T @@@T : Q Ò&ÏÉ~ËÌÈÛØÉèÚM    isDate   cal   createEvent)   setDefaultItemValues   title   calGetString   calendar   newEvent   doTransaction   add+   createEventWithDialog    ÿÿÿÿ       	   item        0   x   ÿÿÿÿ   ÿÿÿÿ   O   calendarViewController.modifyOccurrenceÁ                A      ¹      O                                      aOccurrence   aNewStartTime   aNewEndTime   aNewTitle    ´  J  .       	      T D   QT D   	QT      QT  ¸    
:     QT    V   T 6   QT D   	QT    °;   â   V   :    RT E   QV   5      V   T 6   QT E   QV   5      V   T 6   Q   MT E   QV   5      V   T 6   QT E   QV   5      V   T 6   Q;   â   =   V   V   5   	T  @: QÈ   ;   
â   
T  @C: Q1Õ ËÊÈ4Í>Ì@ÎMÒÍDÒÒGÒÍKÒÍQêÓ/    clone   title   isEvent   startDate   endDate   entryDate   dueDate   doTransaction   modify   calendar+   modifyEventWithDialog    ÿÿÿÿ          instance             ÿÿÿÿ   ÿÿÿÿ   Q   calendarViewController.deleteOccurrencesÁ               
      ¹                               +             aCount   aOccurrences   aUseParentItems   aDoNotConfirm   recurringItems   getSavedItem   occurrences   itemToDelete   hasFutureItem   response   savedItem   ritem    É  Ô  [                 W   Q;    â    :  QY      QT ¸   
   : W  QV  K  \mW  T    V  5   W  Q   ÅT  E   QV  Ù   ?   «;   â   V  B=   : - Á
:  ¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  Q¸   
:  5      Q   
5   W  QQQV      
   V  5   5   	V  5   	   =V   V  : W  QV  5   
5   ¸   
V  5   : Q   ';   â   =   V  V  5   @@: QãQLMÿÿþ¤QN   K   >mW  ;   â   =   V  5   
V  5   
5   V  5   @: QãQLMÿÿÿÂQN;   â   :  QbÊ^ÎËbuÏÈw7 aÊ|ÓÕÔ*ÔÿÿÿÖÉççØH  Ø8ÉÈÕÉ  Éî  È0CÊÏÉÎÉ  Ð   Î +   startBatchTransaction   filter   parentItem   length9   promptOccurrenceModification   delete	   next	   done   value   hashId   newItem   recurrenceInfo%   removeOccurrenceAt   recurrenceId   doTransaction   calendar   modify   oldItem'   endBatchTransaction   ÿÿÿÿ      getSavedItem               b       ¹      !                                        aItemToDelete   hashVal Å    b       	      T  5    5   W   Q   V   7    9   V   Y   T  5    ]   T  5    ¸   
:  ]   8Q   V   7eÒËÎÍÏ	ÊlË    parentItem   hashId   oldItem   clone   newItem   ÿÿÿÿ   k   calendarViewController.deleteOccurrences/occurrences<Á                        ¹                                           	   item u  ©  u             ;    â    T  5   : ?Ò" %   isCalendarWritable   calendar   ¶  D      F   b     ÿÿÿÿ      switchToView                  ¹      ó                        1      @      aViewType   viewDeck   selectedDay!   currentSelection   views   i   commandId   command   setupViewNode	   view   viewTabs   compositeCal¬  Ä&  ª                    Q;    â    :  W   QV  QZ   W  QV   5   W  Q>W  Q   §m  
QV  V  7  
Q=   V  
5   =   W  Q;   ¸   
V  : W  QV  
5      =      #V  ¸   
=   	=   
: Q   V  ¸   
=   	: QÈV  #?W  QQãV  V  Ù   ÿÿÿNf   ¸   
   : Qf   ¸   
   : QV   5   5   W  QV   5   ¸   
Y   : W  Q     
Qv  
QÈ    V      ;   â   :  W  Q;   ¸   
   =   :   QV   V  6   Q;   ¸   
=   :   QV  ;    â    :  5   6   Q;   â   :    	QV  5   V  	   9V  V  	6   QV  ;   â   :  6   QV  ;   6   QV  ¸   
V  : QV  ¸   
V  Ù   V  : Q;   â   :  Q  ÃË  ªÊÈÉÎ	%  §    ·ÎÚÐ
ÈÕÞÕ  ±&ÎÿÿÿîÕ  Ã  ÏÌ  Ô  Ï  ÚÌ  Ú1ÓÕÍÓ  æÊÈ×ÈÎÑÈÎÎÊÈÎÎÎÉÏÓÜÎ    getViewDeck   childNodes   calendar_   id   _command   document   getElementById   -view   setAttribute   checked	   true   removeAttribute   length   forEach   selectedPanel   selectedDay!   getSelectedItems   now   view-tabs   selectedIndex)   getCompositeCalendar   displayCalendar   timezone/   calendarDefaultTimezone   controller-   calendarViewController   goToDay!   setSelectedItems)   onCalendarViewResize   ÿÿÿÿ      setupViewNode                       ¹      *                                        id	   attr	   node  ø  W   Ã       	      ;    ¸   
T  :    QV      V   ¸   
T =      :    9V   ¸   
T V   ¸   
T =      : : Q   .V   ¸   
T V   ¸   
T =   : : QÏÈÚ4èÿÿÿèÉâÿÿÿè:    document   getElementById   hasAttribute   -   setAttribute   getAttribute	   -all    ÿÿÿÿ   
   	   view                      ?   calendar-view-context-menu-next   G   calendar-view-context-menu-previous   +   calendar-go-menu-next   3   calendar-go-menu-previous   ;   appmenu_calendar-go-menu-next   C   appmenu_calendar-go-menu-previous                  ÿÿÿÿ      switchToView/<Á                 %       ¹                                              x !  ç!  Ô                T  =    : Q   T  =   : QÒÒ    label   accesskey                  )   previous-view-button   #   today-view-button   !   next-view-button                  ÿÿÿÿ      switchToView/<á                        ¹                                              x |"  "  Ü                T  =    : -Ò    tooltiptext    ÿÿÿÿ   
      ex         &  5       D   ·      F      ÿÿÿÿ   \     ÿÿÿÿ   ÿÿÿÿ      getViewDeck                          ¹      	                                      ;'  r'              ;    ¸   
=   : Ñ%    document   getElementById   view-deck   ÿÿÿÿ      currentView                          ¹      
                                      ï'  (              ;    â    :  5   ÊÉ    getViewDeck   selectedPanel   ÿÿÿÿ      getSelectedDay                          ¹      
                                      (  ¿(              ;    â    :  5   ÊÉ    currentView   selectedDay   ÿÿÿÿ   -   scheduleMidnightUpdate               F      ¹      x                          (      @   !   aRefreshCallback   jsNow   tomorrow   msUntilTomorrow   udCallback   wakeObserverq*  i2  &            ;    R  W   Q;    V   ¸   
:  V   ¸   
:  V   ¸   
:  ?R W  QV  ¸   
:  V   ¸   
:  W  QY       ]      Q;       Y      ]      Q;   5   	¸   

   =   B: Q;   ¸   
=      B: Qn   ;   5   5   ¸   
;   5   5   : o   Q   ;   ¸   
:  Q;   ¸   
   V  ;   5   : QÈÑÎÎÿÿÿÐÈËÎÉ .Ð 4  Ð GàÑ JÛÏ NÎÐã[ 	   Date   getFullYear   getMonth   getDate   getTime   notify   gMidnightTimer   observe   Services   obs   addObserver#   wake_notification   window!   addEventListener   unload   Components   classes)   @mozilla.org/timer;1   createInstance   interfaces   nsITimer   cancel!   initWithCallback   TYPE_ONE_SHOT   ÿÿÿÿ   Q   scheduleMidnightUpdate/udCallback.notifyÁ                        ¹                                               timer .,  a,  /               :  QÊ    ÿÿÿÿ   W   scheduleMidnightUpdate/wakeObserver.observeÁ                        ¹      -                                        aSubject   aTopic   aData   -  ¿/  7            T =       A5      A5   ¸   
:  Q   4A;   5   5   ¸   
;   5   5   : 6   QA5   ¸   	
   X';   5   5   5   
: QÉÖ×Ï =%ÉÕÔ @^ #   wake_notification   mTimer   cancel   Components   classes)   @mozilla.org/timer;1   createInstance   interfaces   nsITimer!   initWithCallback   TYPE_ONE_SHOT   ÿÿÿÿ   1   scheduleMidnightUpdate/<Á                           ¹                                            ¨0  21  K            ;    5   ¸   
   =   : Q$ß?    Services   obs   removeObserver#   wake_notification   ÿÿÿÿ   #   getViewStyleSheet                  ~       ¹      #                                   ì2  :4  [            ;    5       g   Q=      Q;   5   K  Q   1mW  V  5   V      ;    V  6   Q   ãQLMÿÿÿÏQNÈÈ;    5   ËËÊÓ06ÊÎÏHÓË #   getViewStyleSheet   sheeti   chrome://calendar/content/calendar-view-bindings.css   document   styleSheets	   href    ÿÿÿÿ          cssUri                    sheet       8   7          a   ÿÿÿÿ   .   C          ÿÿÿÿ   1   updateStyleSheetForViews              +      ¹      D                                      aCalendar   ruleCache   color x5  m8  o            ;    5       ;    Y   6   Q;    5      QT  5   V   q      Q  Q  Q;   â   :    Q=   T  5   =     QV  ¸   
V  V  5   Ù   :   QV   T  5   V  5   V  78QÈT  ¸   	
=   
: D   Q=     QV   T  5   75   V  6   QV   T  5   75   ;   ¸   
V  : 6   
QËÐÏÎ×ÊÈÙÝÈÝÏÓÜâ&É# 1   updateStyleSheetForViews   ruleCache   id#   getViewStyleSheetC   .calendar-color-box[calendar-id="   "] {}    insertRule   cssRules   length   getProperty   color   #A8C2E1   style   backgroundColor   cal/   getContrastingTextColor    ÿÿÿÿ         sheet       ruleString       ruleIndex        E   |   ÿÿÿÿ   ÿÿÿÿ   #   cM_initCategories                s      ¹      b                       #              categories_:  À>              n    ;   5   ¸   
=   : o    Q;    ¸   
=   :    QV   K  Q   âmW    QV   V  7  QV  ¸   
     : ×ÿ   ­  Q;   â   V  :   Q;    ¸   	
V  :     c  Q;    ¸   

V  :   Q;    ¸   
V  V  : Q;    ¸   
V  : QV   V  V  8QÈ   V   ¸   
V  ?: QÈÈãQLMÿÿÿQNÈV   ¸   
;   5   ;   : Q;    ¸   
=   ;   B: QÛÉ
ÑÈÍ0  çÐÎÐËÎÈÐ^ËÐÈØÔÔã ¤Õ ¤Û> %   categoryPrefBranch   Services   prefs   getBranch1   calendar.category.color.   getChildList      search-   formatStringForCSSRule!   prefHasUserValue   getCharPref   setCharPref   clearUserPref   splice   forEach%   categoryManagement7   updateStyleSheetForCategory   addObserver    ÿÿÿÿ         i                     category                    categoryFix                    color       [^_0-9a-z-]       O   è       E   ô   ÿÿÿÿ   U   ×             §         ¹   X         ÿÿÿÿ   )   cM_cleanupCategories                   ?       ¹                                            ÷>  ?  ©            n    ;   5   ¸   
=   : o    Q;    ¸   
=   ;   : QÛÉÚ: %   categoryPrefBranch   Services   prefs   getBranch1   calendar.category.color.   removeObserver   %   categoryManagement   ÿÿÿÿ      cM_observe                        ¹                                              aSubject   aTopic   aPrefName   ¶?  lA  ®            A¸    
T : QÏ, 7   updateStyleSheetForCategory   ÿÿÿÿ   =   cM_updateStyleSheetForCategory              É       ¹      .                                      aCatName   color ÔA  /D  ¹            T  A5    q    |  Q  Q  Q;   â   :    Q=   T  =     QV  ¸   
V  V  5   Ù   :   QA5    T  V  5   V  78QÈ;   ¸   
=   	T  : D   Q=   
   QA5    T  75   V   6   QË×ÊÈÔÝÈÚÕÓÙ@ %   categoryStyleCache#   getViewStyleSheetC   .category-color-box[categories~="   "] {}    insertRule   cssRules   length   Preferences   get1   calendar.category.color.      style   backgroundColor    ÿÿÿÿ         sheet       ruleString       ruleIndex           t   ÿÿÿÿ   ÿÿÿÿ   )   observeViewDaySelect               ø      ¹      ©                          .             event	   date   jsDate   jsMainDate   mainDate   maxVisibleDays   startDay   endDay   firstMonth   lastMonth   month   visibleDays E  qJ  Ï            T  5    W   Q;   V   5   V   5   V   5   R W  QV  QT  5   5      v@W  Q>W  Q;   â   :  5   W  Q;   â   :  5   	W  QV  5   
W  QV  5   
W  QV  ¸   
:  W  	Q   Äm>W  
QV  	¸   
V  : >   )V  5   5   V  5   ?W  
Q   DV  	¸   
V  : >   V  5   W  
Q   V  	5   5   W  
QV  
V     !V  	¸   
:  W  QV  
W  QV  	5   ?6   QãV  	¸   
V  : >ÿÿÿ+;   V  5   V  5   V  5   R W  Q;   â   :  ¸   
V  V  : Q;   â   :  ¸   
:  QÍá	È ÖÎÊÍÊ	ÍÎÎË'  Ä  ²  Ú ÞÏ$äÏÓÓÉËÈÉ ÞLËx é Þ-Û ìáÈàØ    detail	   Date	   year   month   day   originalTarget+   supportsDisjointDates   currentView   startDay   endDay   startOfMonth   clone   compare   endOfMonth   getMinimonth   selectDate   focus    ¼   Ú      ÿÿÿÿ      getMinimonth                          ¹      	                                      *K  dK  ù            ;    ¸   
=   : Ñ(    document   getElementById   calMinimonth   ÿÿÿÿ   #   toggleOrientation                 ¬       ¹      +                          
              cmd   newValue	   deck	   viewÑK  JM         	      ;    ¸   
=   : W   QV   ¸   
=   : =      =      
=   W  QV   ¸   
=   V  : Q;   â   :  W  QV  5   	K   mW  V  V  =   6   
QãQLMÿÿÿâQNÑÈÐÉ
ÙØÊÈÌ0#Êà$    document   getElementByIdG   calendar_toggle_orientation_command   getAttribute   checked	   true   false   setAttribute   getViewDeck   childNodes   rotated      $      ÿÿÿÿ   %   toggleWorkdaysOnly                 Ä       ¹      2                                        cmd   newValue	   deck	   view#N  µO        	      ;    ¸   
=   : W   QV   ¸   
=   : =      =      
=   W  QV   ¸   
=   V  : Q;   â   :  W  QV  5   	K   mW  V  V  =   6   
QãQLMÿÿÿâQN;   â   :  ¸   
:  QÑÈÐÉ
ÙØÊÈÌ0#ÊàØ    document   getElementByIdK   calendar_toggle_workdays_only_command   getAttribute   checked	   true   false   setAttribute   getViewDeck   childNodes   workdaysOnly   currentView   goToDay      $      ÿÿÿÿ   #   toggleTasksInView                 Ä       ¹      2                                        cmd   newValue	   deck	   viewP  ¬Q  $      	      ;    ¸   
=   : W   QV   ¸   
=   : =      =      
=   W  QV   ¸   
=   V  : Q;   â   :  W  QV  5   	K   mW  V  V  =   6   
QãQLMÿÿÿâQN;   â   :  ¸   
:  QÑÈÐÉ
ÙØÊÈÌ0#ÊàØ    document   getElementByIdK   calendar_toggle_tasks_in_view_command   getAttribute   checked	   true   false   setAttribute   getViewDeck   childNodes   tasksInView   currentView   goToDay      $      ÿÿÿÿ   3   toggleShowCompletedInView                 Ä       ¹      2                                        cmd   newValue	   deck	   view#R  ¿S  5      	      ;    ¸   
=   : W   QV   ¸   
=   : =      =      
=   W  QV   ¸   
=   V  : Q;   â   :  W  QV  5   	K   mW  V  V  =   6   
QãQLMÿÿÿâQN;   â   :  ¸   
:  QÑÈÐÉ
ÙØÊÈÌ0#ÊàØ    document   getElementById]   calendar_toggle_show_completed_in_view_command   getAttribute   checked	   true   false   setAttribute   getViewDeck   childNodes   showCompleted   currentView   goToDay      $      ÿÿÿÿ      goToDate                 A       ¹                                 	             aDate PT  µT  H            ;    â    :  ;   ¸   
T  : 6   Q;   â   :  ¸   
T  : QÜÉÛ    getMinimonth   value   cal!   dateTimeToJsDate   currentView   goToDay   ÿÿÿÿ   '   getLastCalendarView                 `       ¹                                	           	   deck   viewNodeU  ¥V  S            ;    â    :  W   QV   5   ×ÿ   ;V   5   V   5   7W  QV  5   ¸   
     =   : =   ÊÈÌØÚ    getViewDeck   selectedIndex   childNodes   id   replace   	   week   -view       ÿÿÿÿ   )   deleteSelectedEvents                 _       ¹                                                selectedItemsW  X  a            ;    â    :  ¸   
Y   : W   Q;   ¸   
V   Ù   V   BB: Q;    â    :  ¸   
>Z   C: QÊ×Õ c hÞ,    currentView!   getSelectedItems-   calendarViewController#   deleteOccurrences   length!   setSelectedItems   ÿÿÿÿ   %   editSelectedEvents                 R       ¹                                               selectedItemsñX  ¬Y  n            ;    â    :  ¸   
Y   : W   QV   E   QV   Ù   ?   ;   â   V   >7@C: QÊ×ÕÖ4    currentView!   getSelectedItems   length+   modifyEventWithDialog   ÿÿÿÿ      selectAllEvents                 .      ¹      i                                        items   listener   composite   filter   endZ  À^  x            Z      QY       ]       ]   W   Q;   â   :  W  QV  5   W  Q;   â   :  5      V  V  5   W  Q   V  V  5   W  Q;   â   :  5      V  V  5   	W  Q   V  V  5   
W  Q;   â   :  5   ¸   
:  W  QV  5   ?6   QV  ¸   
V  >;   â   :  5   V  V   : QÊÊ Ï ÊÈÎÊÈÍxËÍxÊÈÍxËÍxÊ×ËxÚÐÿÿÿâE '   onOperationComplete   onGetResult)   getCompositeCalendar;   ITEM_FILTER_CLASS_OCCURRENCES   currentView   tasksInView)   ITEM_FILTER_TYPE_ALL-   ITEM_FILTER_TYPE_EVENT   showCompleted3   ITEM_FILTER_COMPLETED_ALL1   ITEM_FILTER_COMPLETED_NO   endDay   clone   day   getItems   startDay   ÿÿÿÿ      selectAll_ooc                 )       ¹      	                                        aCalendar   aStatus   aOperationType   aId   aDetail     gZ  U[  {            ;    â    :  ¸   
   Ù      B: Qè;    currentView!   setSelectedItems   length   ÿÿÿÿ      selectAll_ogr               1       ¹                                             aCalendar   aStatus   aItemType   aDetail   aCount   aItems	   item      [  N\              T K   mW      ¸    
V   : QãQLMÿÿÿâQN6#Êà 	   push      $      ÿÿÿÿ      setDateRange                    ¹      ¤                         /             aStartDate   aEndDate   docTitle   viewTabs  _  xe              =       QT    Ü  Q  Q  Q  Q;   ¸   
=   :   Q;   â   :  ¸   
T  :   QV    Q;   ¸   
=   :   QT  5   T 5      .V  ;   	â   	:  ¸   

T  : 6   Q   EV  ;   â   :  ¸   
:  6   Q;   â   :  ¸   
T : W  QV  V     dV  ;   â   =   =   Z  V  `   : 6   QV  ;   â   =   =   Z  V  `   : 6   Q   oV  ;   â   =   =   Z  V  `   V  `  : 6   QV  ;   â   =   =   Z  V  `   V  `  : 6   QV  5   W   QÈ;   ¸   
=   : ¸   
=   : =      K;   V      V   =      
=    ;   â   =   =   @=   : 6   Q;   ¸   
=   :   QV  ;   â   :  5   6   QÊÝÑÈÊÕÉÑÈÑ)ÎÛÎÓÊÕÉ_ÜGÈÿÿÿËÉÜLÈÿÿÿÌÎÜIÈÈÿÿÿ¼ÉÜNÈÈÿÿÿ½ÉÏÑØÉÙÚÊÑÈÎÎ       document   getElementById'   intervalDescription%   getWeekInfoService   getWeekTitle   calendarWeek   nativeTime   value!   getDateFormatter   formatDate   currentView'   getRangeDescription   calGetString   calendar/   singleShortCalendarWeek   tooltipText-   singleLongCalendarWeek3   severalShortCalendarWeeks1   severalLongCalendarWeeks   modeBroadcaster   getAttribute	   mode   title    -    brand   brandFullName   branding   view-tabs   selectedIndex   getViewDeck    ÿÿÿÿ         intervalLabel       firstWeekNo       secondWeekNo       weekLabel           Ó  ÿÿÿÿ   ÿÿÿÿ   '   timeIndicator.startÁ                 %       ¹                                      @      aInterval   aThis ôe  ­f  Ã            ;    ;   â       T  Xè: 6   QÔ ÄÉ<    timeIndicator   timer   setInterval   ÿÿÿÿ   Q   timeIndicator.start/timeIndicator.timer<Á                          ¹                                            ;f  if  Ä               ¸    
B: Q6Ñ) 7   updateTimeIndicatorPosition   ÿÿÿÿ   )   timeIndicator.cancelÁ                   4       ¹                                            Ãf  Qg  Ç            ;    5      );   â   ;    5   : Q;    @6   QÊØÌ    timeIndicator   timer   clearTimeout