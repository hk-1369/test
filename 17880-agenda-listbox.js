      ¹   ~ç¿s¹                7     ¹   @   ö      7                   O             chrome://calendar/content/agenda-listbox.js                               4   ?   5   6;    5   ¸   
=   : ;    5   ¸   
=   : n   Y   @]   @]   @]   B]   	×]   
o   Q;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      	6   ;      
6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6   ;      6    ;      6   !;      6   ";      6   #;      6   $;      6   %;      6   &;      6   ';      6   	;      6   (;       6   );      !6   *;      "6   +;      #6   ,;   Y   ;   ]   6   -;   Y   ;   ]   6   .;   5   .   $6   /;   5   .   %6   0;   5   .   &6   1;   5   .   '6   2;   5   .   (6   3;   5   .   )6   4;   5   .   *6   5;   5   .   +6   6;   5   .   ,6   7;   5   .   -6   8;   5   .   .6   9;   5   .   /6   :;   5   .   06   ;;   5   .   16   <;   5   .   26   =;      36   >;   ?Q	Ê !	 VÊ a	 	Ú?ÚBÊÍË;@ËNYË`fËovË    Ë  ¡  ¦Ë  ¯Ë  ¸Ë  Ò  ×Ë  Ý  åË  ð  õË  ÿ Ë  Ë , 5Ë b lË  ¡Ë ¿ ÈË à êË ü Ë  Ë "Ë ) 0Ë : BË M TË _ kË ¿ ÄË Ò ÝË ø ÿË Ë  Ë & .Ë 8 AË J OË e lË z ÊÐ ÊÐÊË ÕÊËÕÊË ­ÊË ¸ÊËÊË ÎÊË àÕFÕ öÕÊËÊËÕ Ë  ! T a       Components   utils   importG   resource://gre/modules/Services.jsmM   resource://gre/modules/Preferences.jsm   agendaListbox)   agendaListboxControl'   mPendingRefreshJobs!   kDefaultTimezone   showsToday   soonDays	   init   uninit#   addPeriodListItem)   removePeriodListItem!   onCheckboxChange   onSelect   onFocus   onBlur   onKeyPress!   editSelectedItem%   findPeriodsForItem   getStart   getEnd   addItemBefore   addItem   isBefore   comparisonDate   getListItems   deleteItem/   deleteItemsFromCalendar   isSameEvent   isEventSelected%   deleteSelectedItem   createNewEvent!   setupContextMenu)   refreshCalendarQuery   setupCalendar%   refreshPeriodDates   addListener   moveSelection!   getSelectedItems   isEventListItem   removeListItems'   getListItemByHashId%   calendarOpListener!   calendarObserver   QueryInterface   onStartBatch   onEndBatch   onLoad   onAddItem+   getOccurrencesBetween   onDeleteItem#   onLocalDeleteItem   onModifyItem   onError#   onPropertyChanged%   onPropertyDeleting#   onCalendarRemoved   onCalendarAdded1   onDefaultCalendarChanged#   updateSoonSection   gEventTimer   ÿÿÿÿ      Synthetic                        ¹                                               aOpen   aDuration  d  °               AT  6    QAT 6   QÊÊ 	   open   duration   ÿÿÿÿ   #   initAgendaListbox                 »      ¹      s                          .              showTodayHeader%   showTomorrowHeader   showSoonHeader   prefObserver	   self¼  W	               A;   ¸   
=   : 6    QA5    ¸   
=   : Q;   ¸   
=   : ¸   
=   : =   	W   Q;   ¸   
=   
: ¸   
=   : =   	W  Q;   ¸   
=   : ¸   
=   : =   	W  QA;   V   ?R 6   QA¸   
A5   =   : QA;   V  ?R 6   QA;   â   :  6   QA;   V  A5   R 6   QAZ  A5   `   A5   `  A5   `  6   QA;   R  6   QY       ]      Q;   5   ¸   
=      B: QA   Q;   ¸   
=      B: QÒÉÖÑÝÑÝÑÝÌÉ×ÌÉËÉÑÉÊÊÐÉ'Ð1à4Ñ:5:# )   agendaListboxControl   document   getElementById   agenda-listbox   removeAttribute!   suppressonselect'   today-header-hidden   getAttribute   checked	   true-   tomorrow-header-hidden-   nextweek-header-hidden   today   Synthetic#   addPeriodListItem   today-header   tomorrow   soonDays+   getSoondaysPreference	   soon   periods'   mPendingRefreshJobs   Map   observe   Services   prefs   addObserver-   calendar.agendaListbox   window!   addEventListener   unload   ÿÿÿÿ      aL_observe                 A       ¹                                              aSubject   aTopic   aPrefName   U  }  (             T x=    y   
z   2;   ;   â   :  6   Q;   ¸   
:  Q   k=uÊÏÉÐX ?   calendar.agendaListbox.soondays   agendaListbox   soonDays+   getSoondaysPreference#   updateSoonSection   ÿÿÿÿ   )   unload_agendaListbox                   0       ¹                                            x  0	  6             ;    5   ¸   
=      : Q   ¸   
:  Q ß Ð    Services   prefs   removeObserver-   calendar.agendaListbox   uninit   ÿÿÿÿ      uninit                 z       ¹   	   "                                        period¿	  Q  A       
      A5       A5    ¸   
A5   : QA5   K   BmW   V   5      /V   5   ¸   
:  ¸   
=   A5   C: QãQLMÿÿÿ¾QN×FÉ0GÊÉÚHÐK-    calendar   removeObserver!   calendarObserver   periods   listItem   getCheckbox'   removeEventListener'   CheckboxStateChange!   onCheckboxChange   0   H      ÿÿÿÿ   #   addPeriodListItem                 ©       ¹                                              aPeriod   aItemId  8  ²  Z             T  ;   ¸   
T =   : ¸   
C: 6    Q;   5   ¸   
T  5    : QT  5    T 6   QT  5    ¸   	
:  ¸   

T  5   : QT  5    ¸   	
:  ¸   
=   A5   C: QØÔÝÑåéd    listItem   document   getElementById   -hidden   cloneNode   agendaListbox)   agendaListboxControl   appendChild   id   getCheckbox   setChecked	   open!   addEventListener'   CheckboxStateChange!   onCheckboxChange   ÿÿÿÿ   )   removePeriodListItem                 a       ¹                                              aPeriod X  m  g             T  5       XT  5    ¸   
:  ¸   
=   A5   C: QT  5       "T  5    ¸   
:  QT  @6    QÈéÈÓÊ    listItem   getCheckbox'   removeEventListener'   CheckboxStateChange!   onCheckboxChange   remove   ÿÿÿÿ   !   onCheckboxChange               q      ¹      {                                       event   periodCheckbox   lopen   listItem   period   leaveloop   nextItemSibling M  î  w             T  5    W   QV   ¸   
=   : =   W  Q;   â   V   =   : W  QV  ¸   
:  W  QV  V  6   Q;   ¸   	
V  5   
=   : ¸   
=   V   ¸   
=   : : QV     ,;   ¸   
V  5   V  5   : Q   V  5   W  Q mãV  @W  QV      NV  5   W  Q;   ¸   
V  :  W  QV      V  ¸   
:  QV  W  QV   ÿÿÿ;   ¸   
Y   Z   ]   : QÍÐ	ÎÓÈË	ÈÎêÐ'çÎ(b)f  ËÎÐÉÏÉÊÑ'ÉÿÿÿÙ4    target   getAttribute   checked	   true'   getParentNodeOrThis;   agenda-checkbox-richlist-item   getItem	   open   document   getElementById   id   -hidden   setAttribute   agendaListbox)   refreshCalendarQuery   start   end   nextSibling   isEventListItem   remove%   calendarController%   onSelectionChanged   detail    ç   k      ÿÿÿÿ      onSelect               p       ¹   	   $                           
             aListItem   listbox	   item ²  Ç         
      ;    ¸   
=   :    QT  D   QV   5     QT     V   V  6   Q;   ¸   
Y   ;   ¸   
:  ]   : QÑ
È×ÎÑ'ÌÈÿÿÿÑR    document   getElementById   agenda-listbox   selectedItem%   calendarController%   onSelectionChanged   agendaListbox!   getSelectedItems   detail   ÿÿÿÿ      onFocus                 C       ¹                                 	              listbox<  Ö  §       	      ;    ¸   
=   :    Q;   ¸   
Y   ;   ¸   
:  ]   : QÑ
ÈÑ'ÌÈÿÿÿÑR    document   getElementById   agenda-listbox%   calendarController%   onSelectionChanged   agendaListbox!   getSelectedItems   detail   ÿÿÿÿ      onBlur                          ¹                                            F    °             ;    ¸   
Y   Z   ]   : QÑ'ÉÿÿÿÙ4 %   calendarController%   onSelectionChanged   detail   ÿÿÿÿ      onKeyPress               >      ¹      k                           "             aEvent   listItem   i  ¹             T  5    W   QV   5   =      V   5   W   QT  5   xT  5   y   1T  5   y   HT  5   y   {T  5   y   ¢z   Ñ;   	¸   

=   : ¸   
:  Q   ­;   	¸   

=   : ¸   
:  QT  ¸   
:  QT  ¸   
:  Q   mA¸   
V   :     V   ¸   
:  ¸   
B: Q   9A¸   
V   :     V   ¸   
:  ¸   
C: Q   ÍÏÎÈh 	ÈpÈp  ÇÈp  ÌÈpÊ  ¿ßXßÎÎXÌÚXÌÚX    target   localName   richlistbox   selectedItem   keyCode   DOM_VK_RETURN   DOM_VK_DELETE   DOM_VK_LEFT   DOM_VK_RIGHT   document   getElementById3   agenda_edit_event_command   doCommand7   agenda_delete_event_command   stopPropagation   preventDefault   isEventListItem   getCheckbox   setChecked   ÿÿÿÿ   !   editSelectedItem                 A       ¹                                               listItemë    Ø             ;    ¸   
=   : 5   W   QV      ;   â   V   5   @C: QÑÍÙ7    document   getElementById   agenda-listbox   selectedItem+   modifyEventWithDialog   occurrence   ÿÿÿÿ   %   findPeriodsForItem               ¤       ¹      C                                       aItem   retPeriods   i   ¹   æ       
      Z   W   Q>W  Q   xmA5    V  75      T;   â   T  A5    V  75   A5    V  75   :    V   ¸   
A5    V  7: QV  #?W  QQãV  A5    Ù   ÿÿÿ{V   É	%xj    èÐíÚ  è-Î  ë  è×  ï    periods	   open   checkIfInRange   start   end	   push   length             ÿÿÿÿ      getStart                 l       ¹      <                                        retStart   i3!  "  ö             @W   Q>W  Q   CmA5    V  75      A5    V  75   W   Q   *V  #?W  QQãV  A5    Ù   ÿÿÿ°V   	%C5U  øÐÕH  ø-Î  û  ø×  þ    periods	   open   start   length       U      ÿÿÿÿ      getEnd                 n       ¹      =                                        retEnd   i"  Y#              @W   QA5    Ù   ?W  Q   CmA5    V  75      A5    V  75   W   Q    V  #?W  QQãV  >ÿÿÿºV   	Ñ C5K ÐÕH 2Î 
 *Í     periods   length	   open   end       K      ÿÿÿÿ      addItemBefore               ¶       ¹      5                                        aNewItem   aAgendaItem   aPeriod   visible   newelement    ô$  ß'              @W   QT  5    5      !;   â   =   : W   Q   ;   â   =   : W   QT @   A5   ¸   
V   : Q   A5   ¸   
V   T : QV   ¸   
T  T : QV   ¸   	
=   
: QV   ÍÏÍÏÈ $ÚØÕÔ    startDate   isDate!   createXULElement7   agenda-allday-richlist-item)   agenda-richlist-item)   agendaListboxControl   appendChild   insertBefore   setOccurrence   removeAttribute   selected   ÿÿÿÿ      addItem            F      ¹      Æ                        '             aItem   periods   i   compitem   newlistItem )  g0  6            ;    â    T  :     @A¸   
T  : W   QV   Ù   >   @@  Q>W  Q  âm  Q  Q  QV   V  7  QV  5     QV  ¸   
:  5     QT  5   5   E   &QV  5   ?E   QT  5   5   	?   MA¸   

T  V  : Ù   >   *A¸   
T  V  5   5   V  V  : Q   mãV  5   W  QA¸   
V  :     .A¸   
T  V  V  V  : W  Q   Á   ³V  5   W  QA¸   
T  V  :          A¸   
T  V  V  :    iA¸   
T  V  :    .A¸   
T  V  V  V  : W  Q   7   )A¸   
T  V  V  V  : W  Q   V  ÿÿþÿÈV  #?W  QQãV  V   Ù   ÿÿþV  ÍË
ÈË	% â Ô ò ÓÎÎË
ÍóHÏÊê(  þ)  HÎÌ)×ÈHÊÎÏ
HÊÓÏ)×ÈHÊ×ÈHÊ ?(ÎÿÿÿìÕ a    isEvent%   findPeriodsForItem   length   listItem   getCheckbox   checked   startDate   isDate   duration	   days   getListItems   addItemBefore   nextSibling   isEventListItem   occurrence   isSameEvent   isBefore    ÿÿÿÿ         period       complistItem       visible        N   ò              R   Ë  ÿÿÿÿ   ÿÿÿÿ      isBefore               à      ¹   	                              )             aItem   aCompItem   aPeriod   itemDate   compItemDate   itemDateEndDate	   comp   Ä1  9  m      
      A¸    
T  T :    QA¸    
T T :   QV   ¸   
:    QV  5   #?
6   QQV  5   V   5     V   5   E   QT  5   5   ?   C   ÙV   5      ·T  5   ¸   
V   : >   *V  5    D   QT 5   5   ?   pT  5   ¸   
V  : >   HV  5    D   3QT 5   5   ?E   QT 5   ¸   
V  : >   V  5       T 5   5      BV   ¸   
V  :   QV  >   NT  5   ¸   
T 5   : W  QV  >   $T  5   ¸   
T 5   : W  QV  >ÎÈÎÈËÈØÓ yÞÉ  ²Ó%åÓCÐÕÓËÐÍ ÏÈ×È×È    comparisonDate   clone   day   isDate   duration	   days   startDate   compare   endDate   ÿÿÿÿ      comparisonDate               º      ¹      u                           !             aItem   aPeriod   periodStartDate   periodEndDate   startDate   endDate   endDateToReturn  :  Û>  ¢      
      T 5    ¸   
:     QV   C6   QT 5   ¸   
:    QV  5   #?
6   QQT  5   ¸   
:    QV  C6   QT  5   ¸   
:    QT  5   ¸   
:    QT  5   5   E   QT 5   ?   V  ¸   
:  W  Q   V  5      "V  5   #?
6   QQ   bV  5   >E   QV  5   	>   AV  5   #?
6   QQV  ×6   QV  ×;6   	QV  ×;6   
QV  C6   QV  ¸   
V  : >E   QV  ¸   
V   : >   
V  T  5   ¸   
:  ÏÈËÏÈØÏÈËÏ
ÈÏÈÝËÍÉÝÜØÌÌÌËÏËÏ	Ï    start   clone   isDate   end   day   startDate   endDate   duration	   hour   minute   second   compare   ÿÿÿÿ      getListItems                    ¹   	                                        aItem   aPeriod   retlistItems   periods   i   leaveloop  @  ,C  É            ;    R  W   QZ  T `   W  QT     A¸   
T  : W  QV  Ù   >   Ì>W  Q   ¬m  Q  QV  V  7  QV  5     Q mãV  5   W  QA¸   
V  :  W  QV      9A¸   
T  V  5   :    V   ¸   
V  : Q   V   ÿÿÿÈV  #?W  QQãV  V  Ù   ÿÿÿIV   ÈÌË
ÈË%  ¬    ¼ ÍÎÎ(e)i ÓÎÌÉÔÓHË Ð,ÎÿÿÿìÕ ß    Array%   findPeriodsForItem   length   listItem   nextSibling   isEventListItem   isSameEvent   occurrence	   push    ÿÿÿÿ         period       complistItem        U   ¼          n       X      ÿÿÿÿ   ÿÿÿÿ      deleteItem               ¹       ¹      Z                          
             aItem   aMoveSelection   isSelected   listItems   i   listItem   isSelected2  £D  ÃF  ë      
      BW   QA¸    
T  : W  QV  Ù   >   V  Ù   ?W  Q   mmV  V  7W  QV  5   W  QV  E   QV       CW   QT    A¸   
:  QV  ¸   
:  QV  #?W  QQãV  >ÿÿÿV   ËÈËÏ m_u ïÎÎÊÌÏ ï3Î ø ï+Í û    getListItems   length   selected   moveSelection   remove    >   u      ÿÿÿÿ   /   deleteItemsFromCalendar                     ¹                                           aCalendar   childNodes G  §H        	      ;    ¸   
A5   5   :    QV   K  Q   SmW  V  E   1QV  5   E   "QV  5   5   5   T  5      V  ¸   
:  QãQLMÿÿÿ­QNÈ×ÈÍ0XÊÙÜÜ    Array   slice)   agendaListboxControl   childNodes   occurrence   calendar   id   remove    ÿÿÿÿ         childNode       1   Y       '   e   ÿÿÿÿ   ÿÿÿÿ      isSameEvent                 M       ¹                                 
             aItem   aCompItem  éI  J              T  5    T 5    E   :QT  ;   â   T  : 7¸   
T ;   â   T : 7: >×ÐÛ.ÿÿÿÌ\    id'   calGetStartDateProp   compare   ÿÿÿÿ      isEventSelected                 ,       ¹                                               listItemyK  L  #            A5    5   W   QV      A¸   
V   : BÐÌ )   agendaListboxControl   selectedItem   isEventListItem   ÿÿÿÿ   %   deleteSelectedItem               \       ¹      #                           	             aDoNotConfirm   listItem   selectedItems íL  N  1            A5    5   W   QA¸   
V   :    <Z  V   5   `   W  Q;   ¸   
V  Ù   V  BT  : QÐÌÒÕ 5@ )   agendaListboxControl   selectedItem   isEventListItem   occurrence-   calendarViewController#   deleteOccurrences   length   ÿÿÿÿ      createNewEvent               {       ¹      '                                        aEvent   eventStart O  Q  C            A¸    
T  5   :     f;   5   5   ¸   
:  W   QV   C6   Q;   ¸   
=   	:    $;   
â   
;   â   :  V   : QÐÖÈËÑÔÿÿÿê9    isEventListItem   target   agendaListbox   today   start   clone   isDate%   calendarController!   isCommandEnabled5   calendar_new_event_command+   createEventWithDialog'   getSelectedCalendar   ÿÿÿÿ   !   setupContextMenu              Ã       ¹      V                                     popup   listItem   enabled   menuitems	   menu ;R  éS  U            A5    5      QA¸   
V   :   QT  5     Q>  Q    5m;   â   V  V  7=   V   : QV  #?W  QQãV  V  Ù   ÿÿÿÀÈ;   ¸   
=   	:   Q;   
â   
V  ;   ¸   
Y   : : QÐÌ
ÈÍ&5'E YØ.ÿÿÿÒ Y*Î Z YÖÑÈßÿÿÿæ> )   agendaListboxControl   selectedItem   isEventListItem   childNodes'   setBooleanAttribute   disabled   length   document   getElementByIdQ   calendar-today-pane-menu-attendance-menu'   setupAttendanceMenu   agendaListbox!   getSelectedItems    ÿÿÿÿ         i        =   E       2   Q   ÿÿÿÿ   ÿÿÿÿ   )   refreshCalendarQuery               i       ¹   	   :                                       aStart	   aEnd   aCalendar   refreshJob   ÇU  a  l            Y   A]    @]   @]   @]   B]       ]      ]      ]      ]      QV   ¸   
T  T T : QÊ ~Ê Ê Ï ¾Ø,    agendaListbox   calendar   calId   operation   cancelled'   onOperationComplete   onGetResult   cancel   execute   ÿÿÿÿ   g   refreshCalendarQuery/refreshJob.onOperationCompleteÁ                 W       ¹                                              aCalendar   aStatus   aOperationType   aId   aDateTime     V  ÕW  t            A5    5   ¸   
A5   :    !A5    5   ¸   
A5   : QA5       ;   â   :  QØÜÎ    agendaListbox'   mPendingRefreshJobs   has   calId   delete   cancelled   setCurrentEvent   ÿÿÿÿ   W   refreshCalendarQuery/refreshJob.onGetResultÁ                |       ¹      '                                     aCalendar   aStatus   aItemType   aDetail   aCount   aItems      õW  Y  ~            A5    D   Q;   ¸   
T :     T - Á
:     Q   &m5   W   QA5   ¸   
V   : QãQ¸   
:  5   ÿÿÿËÈ Ì"ÏÒ8:ÑÕ ËÿÿÿïÒ1    cancelled   Components   isSuccessCode   value   agendaListbox   addItem	   next	   done    ÿÿÿÿ       	   item       =   :       3   E   ÿÿÿÿ   ÿÿÿÿ   M   refreshCalendarQuery/refreshJob.cancelÁ                 a       ¹   	                              
              op)Y  .Z              AC6    Q;   ¸   
A5   ;   5   5   :    QV   E   QV   5      V   ¸   
:  QA@6   QÈáÈÓÏÈ    cancelled   cal   wrapInstance   operation   Components   interfaces   calIOperation   isPending   cancel   ÿÿÿÿ   O   refreshCalendarQuery/refreshJob.executeÁ              V      ¹                              A             aStart	   aEnd   aCalendar   filter   op   JZ  Fa        
      T  D   QT D   	QT     A5    ¸   
:  QT     A5    5   U QT      A5    ¸   
:  U  QT     A5    ¸   
:  U QT  D   QT D   	QT     T 5   =      A=   6   QA5    5   ¸   	
:  - Á
:    Q    m5   
W  QV  ¸   
:  QãQ¸   
:  5   ÿÿÿÑÈ A5    5   ¸   
:  Q   vAT 5   6   QA5    5   ¸   
A5   :    GA5    5   ¸   
A5   : ¸   
:  QA5    5   ¸   
A5   : QAT 6   QA5   5   A5   5      QA5   ¸   
V   >T  T A:   Q;   ¸   
V  ;   5   5   : W  QV  E   QV  5      -AV  6   QA5    5   ¸   
A5   A: QÖÑÏÍ	ÍÖÎ  ÌÒ Ò84ÑÏ ¦ ËÿÿÿðÒÛÏØæÜÊËÑÙÈßÈÓËÝ=    agendaListbox   removeListItems   calendar   getStart   getEnd	   type   composite   calId'   mPendingRefreshJobs   values   value   cancel	   next	   done   clear   id   has   get   delete;   ITEM_FILTER_CLASS_OCCURRENCES-   ITEM_FILTER_TYPE_EVENT   getItems   cal   wrapInstance   Components   interfaces   calIOperation   isPending   operation   set    ÿÿÿÿ         job       ã   4       Ù   ?   ÿÿÿÿ   ÿÿÿÿ      setupCalendar                          ¹      $                                      ða  {c  Å            A¸    
:  QA5   @   A;   â   :  6   QA5      A5   ¸   
A5   : QA5   ¸   
A5   : QA5      A5   ¸   
:  QÌÈËÉ××Ñ 	   init   calendar)   getCompositeCalendar   removeObserver!   calendarObserver   addObserver   mListener   updatePeriod   ÿÿÿÿ   %   refreshPeriodDates               ·      ¹                                &             newDate   oldshowstoday   i   curPeriod 	e  i  Þ      
      A;   â   :  6    QA5   W   QAA¸   
T  : 6   QA5   E   QV       8A¸   
A5   =   : QA¸   
A5   =   : Q   5A5       )A¸   	
A5   : QA¸   	
A5   : QT  C6   
Q>W  Q   ÖmA5   V  7W  QT  T  T  >6   6   6   QV  >E   QA5      !V  ;   â   :  6   Q   V  T  ¸   
:  6   QT  5   V  5   6   QV  T  ¸   
:  6   QV  5   ¸   
V  A5   : QV  #?W  QQãV  A5   Ù   ÿÿÿA¸   
:  QËÉËÌÉÌ3×ÜÒÒÊ	%  Ö  È  è ëÐÚÒÎÎÎÉÒxÎÉÞ ë-Î õ ë× ÷Ì !   kDefaultTimezone/   calendarDefaultTimezone   showstoday   showsToday#   addPeriodListItem   tomorrow   tomorrow-header	   soon   nextweek-header)   removePeriodListItem   isDate   periods	   hour   minute   second   start   now   clone   day   duration   end   listItem   setItem   length)   refreshCalendarQuery    Â   è      ÿÿÿÿ      addListener                        ¹                                               aListener ¯i  Þi               AT  6    QÊ    mListener   ÿÿÿÿ      showsToday                      ¹      6                           
             aStartDate   lstart   lshowsToday  k  _l              T  W   QV       A5    5   W   Q;   â   ;   â   :  V   : W  QV     3AZ  A5    `   A5   `  A5   `  6   Q   AZ  A5    `   6   QV  ÈÐÔÿÿÿøÈ.ÊÊÕÐ    today   start   sameDay   now   periods   tomorrow	   soon   ÿÿÿÿ      moveSelection                 Y       ¹                                               selindexm  n              A5    5   W   QA¸   
A5    5   5   :     A5    ¸   
:  Q   A5    ¸   
:  QÐ	ØÖÑ# )   agendaListboxControl   selectedIndex   isEventListItem   selectedItem   nextSibling	   goUp   goDown   ÿÿÿÿ   !   getSelectedItems                 W       ¹                                 	              selindex   itemsän  Gp  /            A5    5   W   QZ   W  QA¸   
A5    5   :    "Z  A5    5   5   `   W  QV  ÐÉÓ	Ù )   agendaListboxControl   selectedIndex   isEventListItem   selectedItem   occurrence   ÿÿÿÿ      isEventListItem               E       ¹                                              aListItem   isEventListItem   localName Pq  r  B            T  @W   QV      1T  5    W  QV  =   D   QV  =   W   QV   ÊÍÐÏ    localName)   agenda-richlist-item7   agenda-allday-richlist-item   ÿÿÿÿ      removeListItems                 ¢       ¹      C                          	              listItem   leaveloop   newlistItems  u  P            A5    5   W   QV      BW  Q mã@W  QV      V   5   W  Q   CW  QA¸   
V   :    4V   A5    5      V   ¸   
:  Q   CW  QV  W   QV   ÿÿÿÐ(x)| TÓÌÐÔÉÊ )   agendaListboxControl   lastChild   previousSibling   isEventListItem   firstChild   remove              ÿÿÿÿ   '   getListItemByHashId               p       ¹      3                                       ahashId   listItem   leaveloop Iv  Îw  m            A5    5   W   QBW  Q mãA¸   
V   :    !V   5   5   T     
V   V   5   W   QV   @W  QV   ÿÿÿ¯@Ð(M)Q pÌÒÎËÊ )   agendaListboxControl   firstChild   isEventListItem   occurrence   hashId   nextSibling       V      ÿÿÿÿ      agenda_QI                 {       ¹                                            	   aIID y  £z              T  ¸    
;   5   5   :  E   FQT  ¸    
;   5   5   :  E   #QT  ¸    
;   5   5   :     ;   5   5   pAÙÊÙÊÙÐ    equals   Components   interfaces   calIObserver+   calICompositeObserver   nsISupports   results+   NS_ERROR_NO_INTERFACE   ÿÿÿÿ   '   agenda_onBatchStart                          ¹                                              {  {               N    ÿÿÿÿ   S   agendaListbox.calendarObserver.onEndBatchÁ                          ¹                                              >{  D{                   ÿÿÿÿ   K   agendaListbox.calendarObserver.onLoadÁ                          ¹                                            w{  ¬{              A5    ¸   
:  QÑ*    agendaListbox)   refreshCalendarQuery   ÿÿÿÿ   %   observer_onAddItem               Z       ¹                                           	   item	   occs õ{  Ü|  ¤            ;    â    T  :     A¸   
T  : W   QV   ¸   
A5   5   A5   : Q;   â   :  QÍËÈàÎ    isEvent+   getOccurrencesBetween   forEach   agendaListbox   addItem   setCurrentEvent   ÿÿÿÿ   +   getOccurrencesBetween               k       ¹      #                                        aItem	   occs   start   end 4}  ~  °            Z   W   QA5    ¸   
:  W  QA5    ¸   
:  W  QV  E   
QV     $T  ¸   
V  V  Y   : W   QV   ÉÍÈÍÈÎ×È    agendaListbox   getStart   getEnd+   getOccurrencesBetween   ÿÿÿÿ   +   observer_onDeleteItem                        ¹                                           	   item   rebuildFlag  e~  ¤~  »            A¸    
T  C: QÐ# #   onLocalDeleteItem   ÿÿÿÿ   5   observer_onLocalDeleteItem               ¤       ¹      S                                    	   item   moveSelection%   selectedItemHashId	   occs   i   isSelected  ý~  Ã  À      	      ;    â    T  :     B×ÿW   QA¸   
T  : W  Q>W  Q   QmA5   ¸   
V  V  7T : W  QV     V  V  75   W   QV  #?W  QQãV  V  Ù   ÿÿÿ¤V   ÍËÈ	%QCa ÇÙÈÓ Ç%Î Ê ÇÕ Í    isEvent+   getOccurrencesBetween   agendaListbox   deleteItem   hashId   length    =   a      ÿÿÿÿ   +   observer_onModifyItem               ¹       ¹   
   6                                        newItem   oldItem%   selectedItemHashId   listItem    H  Ñ            A¸    
T B: W   Q;   â   T  :     A¸   
T  : QV   ×ÿ   h;   ¸   
V   : W  QV     G;   5   ¸   
:  Q;   5   ¸   
V  : Q;   5   V  6   Q;   	â   	:  QÌÈÍÏÐÈÕÙÔÎ #   onLocalDeleteItem   isEvent   onAddItem   agendaListbox'   getListItemByHashId)   agendaListboxControl   clearSelection-   ensureElementIsVisible   selectedItem   setCurrentEvent   ÿÿÿÿ   M   agendaListbox.calendarObserver.onErrorÁ                        ¹                                                cal   errno   msg   |    â             D    ÿÿÿÿ   a   agendaListbox.calendarObserver.onPropertyChangedÁ                      ¹   
   ]                          
             aCalendar   aName   aValue   aOldValue	   node    Î  \  ä            T x=    y   =   y    z   {A5   ¸   
:  Q   e;   5   5   W   Q   <mV   5   =      
   V   ¸   
:  QV   5   	W   QãV   ÿÿÿÃ   k  u
uÊ æÑXÓ <.B ï ìÏ@Ï ìÎ ò ëË ôX    disabled   color   agendaListbox)   refreshCalendarQuery)   agendaListboxControl   firstChild   localName)   agenda-richlist-item   refreshColor   nextSibling    L   B      ÿÿÿÿ   c   agendaListbox.calendarObserver.onPropertyDeletingÁ                        ¹                                              aCalendar   aName    ë  ø            A¸    
T  T @@: QÔ5 #   onPropertyChanged   ÿÿÿÿ   #   agenda_calRemoved                 -       ¹                                              aCalendar <  ¾  þ            T  ¸    
=   :     A5   ¸   
T  : QÏÔ6    getProperty   disabled   agendaListbox/   deleteItemsFromCalendar   ÿÿÿÿ      agenda_calAdded                 /       ¹                                              aCalendar 
                T  ¸    
=   :     A5   ¸   
@@T  : QÏÖ?    getProperty   disabled   agendaListbox)   refreshCalendarQuery   ÿÿÿÿ   o   agendaListbox.calendarObserver.onDefaultCalendarChangedÁ                        ¹                                                aCalendar Ú  é               O    ÿÿÿÿ   #   updateSoonSection                 l       ¹      !                                         soonHeader~  ^              ;    ¸   
=   :    QA5   A5   6   QA5   C6   QV   ¸   
A5   C: Q;   ¸   	
;   
â   
:  : QÑÈÒÍÖÖ!ÿÿÿß(    document   getElementById   nextweek-header	   soon   duration   soonDays	   open   setItem   agendaListbox%   refreshPeriodDates   now   ÿÿÿÿ      setCurrentEvent                 d      ¹      è                          0              msScheduleTime   complistItem   removelist	   anow   msuntillend   msuntillstart   leaveloop   iP  i  !            ;    ¸   
:  E   Q;    5   5     ã×ÿW   Q;    5   5   5   W  QZ   W  Q;   â   :  W  Q>W  Q>W  Q mã;    ¸   
V  :  W  QV     ,V  5   	5   
¸   
;    5   : ¸   
V  : 5   W  QV  >   ¤V  5   	5   ¸   
;    5   : ¸   
V  : 5   W  QV  >   GV  ¸   
=   =   : QV  V   D   QV   ×ÿ   V  W   Q   V  ¸   
V  : Q   V  ¸   
=   : QV   ×ÿD   QV  V      V  >   V  W   QV      V  5   W  QV   ÿÿþV   ×ÿ    ;   â   ;   V   Xè: QV     XV  Ù   >   H>W  Q   (mV  V  7¸   
:  QV  #?W  QQãV  V  Ù   ÿÿÿÍÌØÙÉÊÈ( f) j *ÐÉÕÊ -!Ê -!Í  ÕÊ 1&Ê 1&ÍBÙÖÎØÔÖÉÎÊÛË%(8 OÔ O0Î P OÕ%    agendaListbox   showsToday   today	   open   tomorrow   listItem   previousSibling   now   isEventListItem   occurrence   startDate   getInTimezone!   kDefaultTimezone   subtractDate   inSeconds   endDate   setAttribute   current	   true	   push   removeAttribute=   scheduleNextCurrentEventUpdate   setCurrentEvent   length   remove    +  8       q   o     ÿÿÿÿ   =   scheduleNextCurrentEventUpdate               Ù       ¹      W                                @   !   aRefreshCallback   aMsUntil   udCallback   wakeObserver 6  _  a      	      Y       ]    W   Q;       Y      ]      Q;   5   ¸   
   =   B: Q;   ¸   
=   	   B: Qn   ;   
5   5   ¸   
;   
5   5   : o   Q   ;   ¸   
:  Q;   ¸   
V   T ;   5   : Q fÏ l  Ð vàÑ y ~ÛÏ ~ÎÐáN    notify   gEventTimer   observe   Services   obs   addObserver#   wake_notification   window!   addEventListener   unload   Components   classes)   @mozilla.org/timer;1   createInstance   interfaces   nsITimer   cancel!   initWithCallback   TYPE_ONE_SHOT   ÿÿÿÿ   a   scheduleNextCurrentEventUpdate/udCallback.notifyÁ                        ¹                                               timer H  {  g               :  QÊ    ÿÿÿÿ   g   scheduleNextCurrentEventUpdate/wakeObserver.observeÁ                        ¹      
                                        aSubject   aTopic   aData   4  È  o            T =          :  QÉÊ #   wake_notification   ÿÿÿÿ   A   scheduleNextCurrentEventUpdate/<Á                           ¹                                            °  :  z            ;    5   ¸   
   =   : Q$ß?    Services   obs   removeObserver#   wake_notification   ÿÿÿÿ   +   getSoondaysPreference                ê       ¹      8                                       prefName   soonpref                =       Q;   ¸   
V   ×:   QV  >E   QV  ×   wV  ×>   d  Q;   ¸   
V  ×: ×  QV  >   V     	V  W  Q;   ¸   
V   V  =   : QÈ   ;V  ×   ×   ?W  Q;   ¸   
V   V  =   : QV  ÊÒÈÓrÉËÓË	×ãÒÝ ?   calendar.agendaListbox.soondays   Preferences   get	   Math   floor   set   INT    ÿÿÿÿ         intSoonpref        K   ^   ÿÿÿÿ