   J   ¹   }ç¿s¹                $  
   ¹   3   Y      '                                chrome://messenger/content/nsContextMenu.js     Ñ                   
   ;    5   ¸   
=   : ;    5   ¸   
=   : ;    5   ¸   
=   : ;    5   ¸   
=   : ;   ¸   
A=   	    : n   
;   R  o   
Q;   Y      ]      ]      ]      ]      ]      ]      ]      	]      
]      ]      ]      ]      ]      ]      ]      ]      ]      ]      ]       ]   !   ]   "   ]   #   ]   $   ]   %   ]   &   ]   '   ]   (   ]   )   ]   *   ]   +    ]   ,   !]   -   "]   .   #]   /   $]   0   %]   1   &]   26   Ê	ÚIÚBÚ?Ú<ÛËÉÿÿÿý57Ê=Ê]ÊgÊjÊmÊ  ÊÊ  ÊÊ  ÚÊ  ÿÊ Ê Ê 3Ê ^Ê iÊ uÊ Ê Ê Ê ÈÊ ÔÊ ãÊ õÊ Ê Ê &Ê 1Ê KÊ TÊ hÊ uÊ Ê Ê Ê °Ê ¿Ê ÌÐ à    Components   utils   import[   resource://gre/modules/InlineSpellChecker.jsmM   resource://gre/modules/PlacesUtils.jsmG   resource://gre/modules/Services.jsmA   resource:///modules/MailUtils.js   XPCOMUtils!   defineLazyGetter   PageMenuParent   gSpellChecker%   InlineSpellChecker   nsContextMenu   prototype   initMenu   initItems   addDictionaries+   initPageMenuSeparator#   initSpellingItems   initSaveItems%   initClipboardItems)   initMediaPlayerItems!   initBrowserItems!   initMessageItems   initSeparators   setTarget#   setMessageTargets!   getComputedStyle   getComputedURL   isLinkSaveable   saveLink   saveImage   copyEmail   showItem   enableItem%   setSingleSelection   setItemAttr   getLinkURL   getLinkURI   getLinkProtocol   linkText%   isContentSelection/   popupNodeIsInThreadPane   makeURLAbsolute!   isTargetATextBox#   hideIfAppropriate'   shouldShowSeparator%   checkLastSeparator   openInBrowser#   openLinkInBrowser   mediaCommand   ÿÿÿÿ                     2       ¹                                               tmp9  «               Y      Q;    ¸   
=   V   : QV   5   R  ÊÙÊ    Cu   importG   resource://gre/modules/PageMenu.jsm   PageMenuParent   ÿÿÿÿ      nsContextMenu                       ¹      }                                        aXulMenu   aIsShift  ô  Ì               A@6    QA@6   QAB6   QAB6   QAB6   QAB6   QAB6   QAB6   QAB6   QAB6   	QAB6   
QAB6   QAB6   QAB6   QAB6   QAB6   QA=   6   QA@6   QA@6   QA=   6   QAB6   QAC6   QAB6   QAB6   QAB6   QAB6   QA>6   QAB6   QAB6   QA¸   
T  T : QÈÈÈÈÈÈÈÈÈÈÈÈÈÈÈÈÌÈÈÌÈÈ,ÈÈÈÈÈÈÈ4Ò"    target	   menu   onTextInput   onEditableArea   onImage   onLoadedImage   onCanvas   onVideo   onAudio   onPlayableMedia   onLink   onMailtoLink   onSaveableLink   onMetaDataItem   onMathML	   link   linkURL      linkURI   linkProtocol   mediaURL#   isContentSelected   shouldDisplay   inMessageArea   inThreadPane%   inStandaloneWindow%   messagepaneIsBlank'   numSelectedMessages   isNewsgroup   hideMailItems   initMenu   ÿÿÿÿ      CM_initMenu              $      ¹      b                                     aPopup   aIsShift   contextPopup  Â  a  =       	      AT  6    QA¸   
;   5   : QA¸   
;   5   : QA5    E   QA5      AB6   QAA¸   	
:  6   QAB6   
QT     $A;   ¸   
A5   T  : 6   
QA¸   
:  Q;   ¸   
=   :    QV   5   - Á
:    Q   'm5   W  QV  5       È ãQ¸   
:  5   ÿÿÿÊÈ AB6   QÊAÖÖDÓÈIÉÉKÈÓMÉQÌUÑÈØ8;Ñ
ÊVËÿÿÿïÒ[È 	   menu   setTarget   document   popupNode#   setMessageTargets   inThreadPane%   messagepaneIsBlank   shouldDisplay#   isContentSelected%   isContentSelection   hasPageMenu   PageMenuParent%   buildAndAddToPopup   target   initItems   getElementById   mailContext   children   value   hidden	   next	   done    ÿÿÿÿ      	   item       Ü   ;       Ò   F   ÿÿÿÿÿÿÿÿú             ÿÿÿÿ      CM_initItems                   a       ¹      #                                        }  ]             A¸    
:  QA¸   
:  QA¸   
:  QA¸   
:  QA¸   
:  QA¸   
:  QA¸   
:  QA¸   
:  QÌÌÌÌÌÌÌÌ +   initPageMenuSeparator   initSaveItems%   initClipboardItems)   initMediaPlayerItems!   initBrowserItems!   initMessageItems#   initSpellingItems   initSeparators   ÿÿÿÿ   %   CM_addDictionaries                          ¹                                            ­  Ï  g             ;    â    :  QÎ %   openDictionaryList   ÿÿÿÿ   1   CM_initPageMenuSeparator                          ¹                                              O  j             A¸    
=   A5   : Q×7    showItem'   page-menu-separator   hasPageMenu   ÿÿÿÿ   )   CM_initSpellingItems                ü      ¹      z                         3              canSpell   onMisspelling  Á  m             ;    5      Q;    5     QA¸   
=   V   : QA¸   
=   V   D   QA5   : QV      3;   ¸   
=   : ¸   	
=   
;    5   : QA¸   
=   V  : QA¸   
=   V  : QV     j  Q  Q;   ¸   
=   :   Q;    ¸   
V  5   V  ×:   QA¸   
=   V  >: QÈ   A¸   
=   B: QA¸   
=   ;    5   : QV      s  Q  Q;   ¸   
=   :   Q;   ¸   
=   :   Q;    ¸   
V  V  : QA¸   
=   B: QÈ   9A5      A¸   
=   C: Q   A¸   
=   B: QÏÏÕáÛÏswÕzÕeÑ
ÑÈ
ÕÈÝÒÛnÑ
ÑÈ
Ñ
ÈØØ×Ò@    gSpellChecker   canSpellCheck   overMisspelling   showItem?   mailContext-spell-check-enabled7   mailContext-spell-separator   onEditableArea   document   getElementById   setAttribute   checked   enabledG   mailContext-spell-add-to-dictionaryO   mailContext-spell-suggestions-separator)   addSuggestionsToMenu   parentNodeA   mailContext-spell-no-suggestions=   mailContext-spell-dictionariesG   mailContext-spell-dictionaries-menuI   mailContext-spell-language-separator/   addDictionaryListToMenuO   mailContext-spell-add-dictionaries-main    ÿÿÿÿ         addMenuItem       suggestionCount        ÿÿÿÿ         dictMenu       dictSep        À   ^   ÿÿÿÿ   [  g   ÿÿÿÿ   ÿÿÿÿ   !   CM_initSaveItems                   /       ¹                                            î  v               A¸    
=   A5   : QA¸    
=   A5   : Q××;    showItem)   mailContext-savelink   onSaveableLink+   mailContext-saveimage   onLoadedImage   ÿÿÿÿ   +   CM_initClipboardItems                Ë      ¹   (   ï                         F              searchTheWeb­  _               ;    â    :  QA¸   
=   A5    E   QA5   : QA¸   
=   A5    E   %QA5    E   QA5   D   QA5   : QA¸   
=   	A5    E   QA5   : QA¸   
=   
A5    E   QA5   : QA¸   
=   A5    E   QA5    : QA¸   
=   A5   : QA¸   
=   A5   E   QA5    : QA¸   
=   A5   : QA¸   
=   A5   E   QA5    : QA¸   
=   A5   E   QA5    : Q;   ¸   
=   :    QA¸   
V   A5    E   QA5    E   QA5   : QV   5        Q  Q  Q  Q;   5   5   ¸   
:  ¸   
:    Q;   ¸   
=   :   Q=     Q  QV  Ù   ×   /V  =   W  QV  ¸    
>×: W  Q   V  W  QV   V  ¸   "
V  Z  ;   #5   $5   %5   &`   V  `  : 6   !QV   V  6   'QÈ  ÎÍ!ÓÿÿÿßÍÍÍÒ  ¢Í#ÓÿÿÿÝÍ"ÓÿÿÿÞÍ'ÍÿÿÿÃ×Ù5ÿÿÿË×ÙAÿÿÿ¿Ù;ÿÿÿÅÑÈÌÍÍ  ³ÊÝ
ÖÒ
Ñ	È
Ê
Ì*ÉxÎÍÉ×Ø$È  ÄÉÏ  ¶ 7   goUpdateGlobalEditMenuItems   showItem   mailContext-cut   inMessageArea   onTextInput!   mailContext-copy   inThreadPane   onPlayableMedia#   isContentSelected#   mailContext-paste!   mailContext-undo+   mailContext-selectall+   mailContext-copyemail   onMailtoLink)   mailContext-copylink   onLink+   mailContext-copyimage   onImage5   mailContext-composeemailto)   mailContext-addemail   document   getElementById1   mailContext-searchTheWeb   hidden#   commandDispatcher   focusedWindow   getSelection   toString!   bundle_messenger!   openSearch.label   length   .truncated   slice   label%   getFormattedString   Services   search   currentEngine	   name   value    ÿÿÿÿ         selection       bundle       key       abbrSelection        Ò  ø   ÿÿÿÿ   ÿÿÿÿ   /   CM_initMediaPlayerItems                Y      ¹      F                                        onMedia  !  Ê       	      A5    D   QA5      QA¸   
=   V   E   QA5   5   : QA¸   
=   V   E   QA5   5    : QA¸   
=   V   E   QA5   5    : QA¸   
=   	V   E   QA5   5   : QV      £  QA5   5   
@D   QA5   5   A5   5     QA¸   
=   =   V  : QA¸   
=   =   V  : QA¸   
=   =   V  : QA¸   
=   	=   V  : QÈ×æ×4ÌÿÿÿÌ×3ÌÿÿÿÍæË
ÓÜÚÚÚÛ  Ñ    onVideo   onAudio   showItem-   mailContext-media-play   target   paused/   mailContext-media-pause-   mailContext-media-mute   muted1   mailContext-media-unmute   error   networkState#   NETWORK_NO_SOURCE   setItemAttr   disabled    ÿÿÿÿ         hasError        »      ÿÿÿÿ   ÿÿÿÿ   '   CM_initBrowserItems                       ¹      `                           #           !   notOnSpecialItem   loadedProtocolC!  ½'  Ú       	      A5    D   HQA5   D   <QA5   D   0QA5   D   $QA5   D   QA5   D   QA5       QV      +;   â   =   : Q;   â   =   	: QA¸   

=   V   : QA¸   

=   V   : Q=     QA5   E    QA5   5   5   5   5      )A5   5   5   5   5   5   W  QA¸   

=   V   E   *QV  E    QV  =   E   QV  =   : QA¸   

=   A5   E   1QA5    E   $QA5   =   E   QA5   =   : QØäØÓÓÕÕÊÌÚä  ôÍÊÊÚ  ô  ûÍÌ!ÍÞ  ûQ    inMessageArea#   isContentSelected   onCanvas   onLink   onImage   onPlayableMedia   onTextInput   goUpdateCommand   cmd_stop   cmd_reload   showItem!   mailContext-stop%   mailContext-reload      target   ownerDocument   defaultView   top   location   protocol3   mailContext-openInBrowser   about:   chrome:;   mailContext-openLinkInBrowser   onMailtoLink   linkProtocol   about   chrome   ÿÿÿÿ   '   CM_initMessageItems                q      ¹   >   ë                                     canMove   msgModifyItems   canArchive   canCopyï'  @  ÿ             A5        _  Qf     Q>  Q    (mA¸   
V  V  7B: QV  #?W  QãV  V  Ù   ÿÿÿÍÈÈÈ;   5      QA¸   
=   A5   ?E   QA5   : QA¸   
=   A5   ?E   QA5   : QA¸   
=   	A5   ?E   !QA5   E   Q;   
¸   
:  : QA¸   
=   ;   5    E   QA5   ?: QA¸   
=   : QA¸   
=   : QA¸   
=   A5   : QA¸   
=   : QA¸   
=   : QA¸   
=   : QA¸   
=   : QA¸   
=   A5   ?E   QA5   E   QA5    : QA¸   
=   A5   : QA5   >E   9QA5    E   ,QA5    E   QA5   ?E   Q;   5      Q;   5     QA¸   
=   V   E   QV  E   
QV  : QA¸   
=   V  E   QA5    : QA¸    
=   V   E   QA5    : QV  D   -Q;   5   E   Q;   !5   ">75   #=   $  QA¸   
=   %V  : QA¸   
=   &V  : QV     :;   'â   ';   (¸   )
=   &: : Q;   *â   *=   +: QA¸   
=   ,V  : QA¸   
=   -V  : QA¸   
=   .A5   / E   (QA5   ?E   QA5    E   QA5    : QA¸   
=   0A5   / E   (QA5   ?E   QA5    E   QA5    : QA¸   
=   1A5   / E   (QA5   >E   QA5    E   QA5    : QA¸   
=   2A5   / : QA¸   
=   3A5   >E   +QA5    E   Q;   5    E   QA5    : Q;   45   5   A¸   
=   6B: Q   A¸   
=   6: QA¸   
=   7V  : QA¸   
=   8V  E   QA5   D   
QV   : Q;   *â   *=   9: QA¸   
=   :A5   ?E   QA5    : QA¸   
=   ;A5    E   QA5   <E   QA5   = : QËÊ &(8× :Ì  ÖÏÍÔ ÍÔ ÍÚÌ !ÍÑÈ $ÑÑ×ÑÑÑÑÍÚ 0×Î1ÍÍÞÏá ;ÍÊ$ ?×3ÿÿÿÍÚÜÕÕÛÿÿÿæÓÕÕÍ*ÍÎ.Í. T YÍ-ÍÎ1Í1 Y ^Í)ÍÎ-Í- ^ cÍ.ÿÿÿÒÛ(Í(Ñ( e kÊ×ÑÕÍÚ t {ÓÍÎ2 }ÍÙ% K    inMessageArea   showItem   length   gFolderDisplay3   canDeleteSelectedMessages3   mailContext-openNewWindow'   numSelectedMessages   inThreadPane9   threadPaneContext-openNewTab9   mailContext-openConversation'   gConversationOpener1   isSelectedMessageIndexedA   mailContext-openContainingFolder#   folderPaneVisible%   setSingleSelection/   mailContext-replySender+   mailContext-editAsNew5   mailContext-replyNewsgroup   isNewsgroup)   mailContext-replyAll+   mailContext-replyList'   mailContext-forward3   mailContext-forwardAsMenuI   mailContext-multiForwardAsAttachment   hideMailItems5   mailContext-copyMessageUrl   onPlayableMedia   gMessageDisplay   isDummy5   canArchiveSelectedMessages'   mailContext-archive)   mailContext-moveMenu   enableItem   window   arguments   scheme	   file)   mailContext-copyMenu;   mailContext-moveToFolderAgain3   initMoveToFolderAgainMenu   document   getElementById   goUpdateCommand+   cmd_moveToFolderAgain!   mailContext-tags!   mailContext-mark1   mailContext-ignoreThread%   inStandaloneWindow7   mailContext-ignoreSubthread/   mailContext-watchThread9   mailContext-afterWatchThread%   mailContext-saveAs   Application   platformIsMac1   mailContext-printpreview#   mailContext-print%   mailContext-delete   cmd_delete!   downloadSelected;   mailContext-reportPhishingURL   onLink   onMailtoLink    ÿÿÿÿ      /   messageTabSpecificItems                     3   mailContext-openNewWindow   9   threadPaneContext-openNewTab   9   mailContext-openConversation   A   mailContext-openContainingFolder   '   mailContext-archive   /   mailContext-replySender   +   mailContext-editAsNew   5   mailContext-replyNewsgroup   )   mailContext-replyAll   +   mailContext-replyList   '   mailContext-forward   3   mailContext-forwardAsMenu   I   mailContext-multiForwardAsAttachment   5   mailContext-copyMessageUrl   )   mailContext-moveMenu   )   mailContext-copyMenu   ;   mailContext-moveToFolderAgain   1   mailContext-ignoreThread   7   mailContext-ignoreSubthread   /   mailContext-watchThread   !   mailContext-tags   !   mailContext-mark   %   mailContext-saveAs   1   mailContext-printpreview   #   mailContext-print   %   mailContext-delete   !   downloadSelected   ;   mailContext-reportPhishingURL                                i        (   8          Y   ÿÿÿÿ      D       ÿÿÿÿd             ÿÿÿÿ   #   CM_initSeparators                 3       ¹                                           +   mailContextSeparators0@  EC              f       QV   ¸    
A5   A: QA¸   
A5   : Q
Ê ÖÒ#    forEach#   hideIfAppropriate%   checkLastSeparator	   menu                  9   mailContext-sep-open-browser   )   mailContext-sep-link   )   mailContext-sep-open   +   mailContext-sep-open2   +   mailContext-sep-reply   +   paneContext-afterMove   =   mailContext-sep-afterTagAddNew   C   mailContext-sep-afterTagRemoveAll   A   mailContext-sep-afterMarkAllRead   A   mailContext-sep-afterMarkFlagged   ;   mailContext-sep-afterMarkMenu   9   mailContext-afterWatchThread   )   mailContext-sep-edit   )   mailContext-sep-copy   =   mailContext-sep-reportPhishing   )   mailContext-sep-undo   3   mailContext-sep-clipboard   O   mailContext-spell-suggestions-separator   7   mailContext-spell-separator                  ÿÿÿÿ      CM_setTarget            î      ¹   m   3                       ¹             aNode   request	   elem   xulNS   editFlags   XMLNS   NS_MathML ÐC  É]              ;    ¸   
:  Q;    ¸   
:  Q;    ¸   
:  Q=     QT  5   V    $T  5   =       	Q  Q  Q  QT  5     Q;   	¸   

V  :   Q  Q>  
Q    RmV  ¸   
V  
: 5   =      !V  ¸   
V  
: W  Q   (V  
#?W  
QQãV  
V  Ù   ÿÿÿ£È;   	¸   
V  =   =   :   	QV  ¸   
V  	: QV  	¸   
T  =   >>C: QAB6   QÈAB6   QAB6   QAB6   QAB6   QAB6   QA=   6   QAB6   QAB6   QAB6   QA=   6   QA=   6    QA@6   !QA@6   "QAB6   #QAT  6   $Q;   %¸   &
A5   $;   ':   QAV  ;   %5   (>I6   QAV  ;   %5   )>I6   QA5   $5   *;   +5   ,  A5   $;   -5   .5   /rE   QA5   $5   0   AC6   QAC6   QA5   $¸   1
;   -5   .5   /5   2: W   QV   E   QV   5   3V   5   4   AC6   QAA5   $5   05   56   Q  aA5   $;   6r   "AA¸   7
A5   $: 6   Q  3V  ;   %5   8;   %5   9   {A5   $5   :    eAC6   Q;    ¸   ;
A5   $¸   <
;   -5   .5   =: 5   >: Q;    ¸   ?
;   	5   @;   	5   A: Q  V  ;   %5   B   ß  Q  QA5   $5   C5   D  QV  ¸   <
;   -5   .5   E: ¸   F
;   -5   .5   G: ¸   <
;   -5   .5   E: ¸   F
;   -5   .5   H:   Q;    ¸   ;
V  ¸   I
V  : : Q;    ¸   ?
;   	5   @;   	5   A: QÈ   °A5   $;   Jr   AC6   KQ   A5   $;   Lr   =AC6   QAC6   MQAA5   $5   ND   QA5   $5   O6   Q   IA5   $;   Pr   8AC6   QAC6   MQAA5   $5   ND   QA5   $5   O6   Q=   Q  QA5   $W  Q  mV  5   *;   +5   ,  åA5    E   rQV  ;   RrE   QV  5   SD   SQV  ;   TrE   QV  5   SD   4QV  ;   UrD   $QV  ¸   V
=   W=   X: =   Y   {AC6   QAC6   QAV  6   ZQAA¸   [
:  6    QAA¸   \
:  6   !QAA¸   ]
:  6   "QAA5   "=   _6   ^QAA¸   a
:  6   `QA5       AA¸   7
V  : 6   QA5       ÃV  ;   brE   QV  5   cD   QV  ;   drE   QV  5   eD   yQV  ;   frE   QV  5   cD   QV  5   gD   KQV  ;   hrE   QV  5   iD   QV  5   jD   QV  ¸   V
V  =   j:    AC6   QV  5   W  QãV  ÿÿýò=   k  QA5   $5   *;   +5   lE   QA5   $5   5   V  D   QA5   $5   V     AC6   #Q ¢ÐÐÐ
ÊÍÎÝÍÐÈ&RDb
 ®ÏÎÏÈH ®-Î ± ®Ö ´ÚÈÓÚÉÈÈÈÈÈÌÈÈÈÌÌÈÈÈÊ×ÈØØÖÜËÈÈá
ÈÝ
ÈÜÌÏÎÚvÌ
È
èÈÿÿÿí
éÏ  ÚÑÕÚÊÏ çÊÏ çÊÏ çÈÛÿÿÿíêÌÍÌ8ÈÈèÌÈÈã ý
ÊË(  ÿÔÍßßÐÕÉ
È
È
Ë
ÉÉ
ÉÉ
ÉÉ
Ó
ÉÉ
ÍÉßßÐÞÐÞÔÈ (Î ÿË ,
ÊÜÛÐÈ    gSpellChecker1   clearSuggestionsFromMenu7   clearDictionaryListFromMenu   uninit{   http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul   namespaceURI   localName   treecol   parentNode   document#   getAnonymousNodes	   item   treecolpicker   length=   getAnonymousElementByAttribute   anonid   popup   buildPopup   openPopup   before_start   shouldDisplay   onImage   onLoadedImage   onMetaDataItem   onTextInput   onEditableArea   imageURL      onLink   onVideo   onAudio   mediaURL   linkURL   linkURI   linkProtocol   onMathML   target!   SpellCheckHelper   isEditable   window   TEXTINPUT   EDITABLE   nodeType	   Node   ELEMENT_NODE   Components   interfaces-   nsIImageLoadingContent   currentURI   getRequest   CURRENT_REQUEST   imageStatus+   STATUS_SIZE_AVAILABLE	   spec!   HTMLInputElement!   isTargetATextBox   INPUT   TEXTAREA   readOnly	   init   QueryInterface/   nsIDOMNSEditableElement   editor   initFromEvent!   popupRangeParent!   popupRangeOffset   CONTENTEDITABLE   ownerDocument   defaultView+   nsIInterfaceRequestor   getInterface!   nsIWebNavigation#   nsIEditingSession%   getEditorForWindow#   HTMLCanvasElement   onCanvas!   HTMLVideoElement   onPlayableMedia   currentSrc   src!   HTMLAudioElementI   http://www.w3.org/XML/1998/namespace#   HTMLAnchorElement	   href   HTMLAreaElement   HTMLLinkElement   getAttributeNS9   http://www.w3.org/1999/xlink	   type   simple	   link   getLinkURL   getLinkURI   getLinkProtocol   onMailtoLink   mailto   onSaveableLink   isLinkSaveable!   HTMLQuoteElement	   cite!   HTMLTableElement   summary   HTMLModElement   dateTime   HTMLElement   title	   langE   http://www.w3.org/1998/Math/MathML   TEXT_NODE    ÿÿÿÿ         treecols       nodeList       treeColPicker       popup               
      i        ÿÿÿÿ         targetWin       editingSession        |        ®   b       c     ÿÿÿÿ   £   n          ß  Ó   ÿÿÿÿ   ÿÿÿÿ   )   CM_setMessageTargets               #      ¹      d                                        aNode   tabmail þ]  Ëb  3            ;    ¸   
=   :    QV      7AV   5   5   5   ;   5   q6   QAB6   	Q   AC6   QAC6   	QA5       'AB6   
QA?6   QAB6   QAC6   QAA¸   
T  : 6   
QA;    ¸   
=   : 5   5   5   =   6   QA;   â   :  6   QA;   5   6   QAA5   
 E   QA5   D   QA5   6   QÑ
È2åÍÈÈÈÈÈÈÌÉÒÒÌËÉÑÍØ7    document   getElementById   tabmail   inMessageArea   selectedTab	   mode	   name   mailTabType   modes%   inStandaloneWindow   inThreadPane'   numSelectedMessages   isNewsgroup   hideMailItems/   popupNodeIsInThreadPane%   messagepaneIsBlank   messagepane   contentWindow   location	   href   about:blank-   GetNumSelectedMessages   gFolderDisplay+   selectedMessageIsNews   onImage   onLink   ÿÿÿÿ   '   CM_getComputedStyle                 .       ¹                                              aElem   aProp  Èc  Md  ^            T  5    5   ¸   
T  =   : ¸   
T : ÜÊ _)    ownerDocument   defaultView!   getComputedStyle   !   getPropertyValue   ÿÿÿÿ   #   CM_getComputedURL               `       ¹   	                                           aElem   aProp   url  ee  Nf  i            T  5    5   ¸   
T  =   : ¸   
T : W   QV   5   ;   5      V   ¸   
:     @ÜÊ jÈÔÐ:Ê    ownerDocument   defaultView!   getComputedStyle   '   getPropertyCSSValue   primitiveType#   CSSPrimitiveValue   CSS_URI   getStringValue   ÿÿÿÿ   #   CM_isLinkSaveable                  ¸       ¹      3                                   g  &j  u      	         Q;    5   5      Q;   5   ¸   
A5   5   A5   V   5   	: QÈ      Qv   QBÈÈ    A5   
E   IQA5   
=   D   6QA5   
=   D   $QA5   
=   D   QA5   
=    KÔÜÏ yÊÌË ÌÒÒÒÎ+    Components   interfaces1   nsIScriptSecurityManager   Services+   scriptSecurityManager3   checkLoadURIWithPrincipal   target   nodePrincipal   linkURI   STANDARD   linkProtocol   mailto   javascript	   news   snews    ÿÿÿÿ       1   nsIScriptSecurityManager       ÿÿÿÿ          e            O          I   ÿÿÿÿ   Q      ÿÿÿÿÿÿÿÿ_            ÿÿÿÿ      CM_saveLink                   )       ¹                                            xj  Îj        	      ;    â    A5   A¸   
:  @C@@;   : QØÌÿÿÿêI    saveURL   linkURL   linkText   document   ÿÿÿÿ      CM_saveImage                   #       ¹                                            k  wk        	      ;    â    A5   @=   B@@;   : QâL    saveURL   imageURL   SaveImageTitle   document   ÿÿÿÿ      CM_copyEmail              2      ¹      f                                      url   qmark   addresses   characterSet   clipboard   kMailToLengthþk  Rp              ×  QA5    W   QV   ¸   
=   : W  QV  QV  V     %V   ¸   
V  V  : W  Q   V   ¸   
V  : W  Q  QA5   5   5   W  Q;   5   	5   
¸   
;   5   5   :   QV  ¸   
V  V  : W  QÈ     Qv  QÈ    ;   5   	5   ¸   
;   5   5   : W  QV  ¸   
V  : Q  
ËÐÈÉ ÓÍÏÈe
ÕÖÏ ¯ÈÓÎÓÖÏ ·ÈÓ     linkURL   indexOf   ?   substring   substr   target   ownerDocument   characterSet   Components   classesA   @mozilla.org/intl/texttosuburi;1   getService   interfaces   nsITextToSubURI!   unEscapeURIForUIK   @mozilla.org/widget/clipboardhelper;1%   nsIClipboardHelper   copyString    ÿÿÿÿ         textToSubURI       ÿÿÿÿ         ex         u   i       v   c   ÿÿÿÿ   ß      ÿÿÿÿ   ÿÿÿÿ      CM_showItem               A       ¹                                              aItemOrId   aShow	   item  q  )r  È            T  5    ;      ;   ¸   
T  :    T  W   QV   T  6   QÎÔ)ÐÊ    constructor   String   document   getElementById   hidden   ÿÿÿÿ      CM_enableItem               A       ¹                                              aItemOrId   aEnabled	   item  @s  Ûs  Ô            T  5    ;      ;   ¸   
T  :    T  W   QV   T  6   QÎÔ)ÐÊ
    constructor   String   document   getElementById   disabled   ÿÿÿÿ   +   CM_setSingleSelection               o       ¹      !                           	             aID   aHide	   hide  v  	w  ã            T ;       T    CW   QA¸   
T  A5   ?E   $QA5    E   QV   E   QA5    : QA¸   
T  A5   ?: QÉÓÙ4ÍÊ å×4    undefined   showItem'   numSelectedMessages   hideMailItems   onPlayableMedia   enableItem   ÿÿÿÿ      CM_setItemAttr               W       ¹                                              aId   aAttr	   aVal	   elem   ¯x  Óy  õ            ;    ¸   
T  : W   QV      ;T @   V   ¸   
T : Q   V   ¸   
T T : QÏÈ×Õ    document   getElementById   removeAttribute   setAttribute   ÿÿÿÿ      CM_getLinkURL                        ¹   	   *                                      	   href´z  L|              A5    5      A5    5   A5    ¸   
=   =   : W   QV    D   QV   ¸   
:  =      =   pA¸   
A5    5   V   : W   QV   ËÌ×ÈÖ
É×È 	   link	   href   getAttributeNS9   http://www.w3.org/1999/xlink	   trim      Empty href   makeURLAbsolute   baseURI   ÿÿÿÿ      CM_getLinkURI                  9       ¹                                         ã|  y}              ;    5   ¸   
A5   @@:       Qv   QÈ    @ÙÉÓ    Services   io   newURI   linkURL    ÿÿÿÿ          ex            "       $      ÿÿÿÿ   ÿÿÿÿ   %   CM_getLinkProtocol                          ¹                                            ;~  £~  &            A5       A5    5   @Ì    linkURI   scheme   ÿÿÿÿ      CM_linkText                 B      ¹      W                                      	   textR  ¸  1            ;    â    A5   : W   QV    D   QV   ¸   
:  =     A5   ¸   
=   : W   QV    D   QV   ¸   
:  =      ÇA5   ¸   
=   : W   QV    D   QV   ¸   
:  =      A5   5      A5   5   W   Q   d;   â   =   	=   : W   QV   E   QV   ¸   
:  =       $A¸   

A5   5   V   : W   QV   ÐÈÖ
ÉÒÈ
Ö
ÉÒÈÖ
ÉËÕÔÈÊËÊ×È D    gatherTextUnder	   link	   trim      getAttribute   title   alt	   href   getAttributeNS9   http://www.w3.org/1999/xlink   makeURLAbsolute   baseURI   ÿÿÿÿ   +   CM_isContentSelection                   !       ¹                                            w  Ð  K            ;    5   5   ¸   
:  5    ÖÊD    document#   commandDispatcher   focusedWindow   getSelection   isCollapsed   ÿÿÿÿ   5   CM_popupNodeIsInThreadPane               @       ¹      -                                       aNode	   node   ±  T            T  W   Q   *mV   5    =      CV   5   W   QãV   ÿÿÿÕBÈ(0 WÏÎ VË ]    id   threadTree   parentNode       0      ÿÿÿÿ   %   CM_makeURLAbsolute               L       ¹                                              aBase	   aUrl   baseURI  Ö    h            ;    5   ¸   
T  @@: W   Q;    5   ¸   
V   ¸   
T : @@: 5   ÖÈßÿÿÿíÉ;    Services   io   newURI   resolve	   spec   ÿÿÿÿ   '   CM_isTargetATextBox                 <       ¹                                              aNode   /  u            T  ;    r   (T  5   =   D   QT  5   =   T  ;   rÉãÊ. !   HTMLInputElement	   type	   text   password'   HTMLTextAreaElement   ÿÿÿÿ   )   CM_hideIfAppropriate                        ¹                                              aSeparatorID "                A¸    
T  A¸   
T  : : QÖÿÿÿäD    showItem'   shouldShowSeparator   ÿÿÿÿ   -   CM_shouldShowSeparator                      ¹      7                                       aSeparatorID   separator   sibling Ü  G              ;    ¸   
T  : W   QV      gV   5   W  Q   4mV  ¸   
=   : =      CV  5   W  QãV  E   QV  5   =   ÿÿÿ¶BÏÈ
Î(O ÐÉ
Î à     document   getElementById   previousSibling   getAttribute   hidden	   true   localName   menuseparator    3   O      ÿÿÿÿ   +   CM_checkLastSeparator               }       ¹      <                                       aPopup   sibling   ¿              T  5       Q   dmV   ¸   
=   : =      7V   5   =      !V   ¸   
=   C: Q   V   5   W   QãV   ÿÿÿÍ(j ¡Ð
ÉÏ
Õ

Î ¡Ë ¬(    lastChild   getAttribute   hidden	   true   localName   menuseparator   setAttribute   previousSibling       j      ÿÿÿÿ   !   CM_openInBrowser                 Ø       ¹      M                                         uriì    °            ;    5   ¸   
A5   5   5   5   5   5   @@:    Q;   	5   
¸   
Y   V   ]   Z  Y   ;   ¸   
:  Xè]   ;   5   5   5   ]   `   ]   : Q;   5   5   ¸   
;   5   5   : ¸   
V   : Qð ±ÈÖÉ
ÌÌâ ³ ºÖÏ ºÊ º    Services   io   newURI   target   ownerDocument   defaultView   top   location	   href   PlacesUtils   asyncHistory   updatePlaces   uri	   Date   now   visitDate   Components   interfaces)   nsINavHistoryService   TRANSITION_LINK   transitionType   visits   classese   @mozilla.org/uriloader/external-protocol-service;1   getService5   nsIExternalProtocolService   loadURI   ÿÿÿÿ   )   CM_openLinkInBrowser                   ¢       ¹      ?                                      @  Ø  ¿      
      ;    5   ¸   
Y   A5   ]   Z  Y   ;   ¸   
:  Xè]   ;   5   	5   
5   ]   `   ]   : Q;   5   5   ¸   
;   5   	5   : ¸   
A5   : QÖË
ÌÌâ À ÇÖÏ ÇÊ Ç    PlacesUtils   asyncHistory   updatePlaces   linkURI   uri	   Date   now   visitDate   Components   interfaces)   nsINavHistoryService   TRANSITION_LINK   transitionType   visits   classese   @mozilla.org/uriloader/external-protocol-service;1   getService5   nsIExternalProtocolService   loadURI   ÿÿÿÿ      CM_mediaCommand                      ¹      B                                        command   media   Í  Ì            A5    W   QT  x=   y   (=   y   2=   y   <=   y   Bz   MV   ¸   
:  Q   9V   ¸   
:  Q   %V   C6   Q   V   B6   Q   Ëkvu
u
u
uÊ ÐÏXÏXËXËX    target	   play   pause	   mute   unmute   muted